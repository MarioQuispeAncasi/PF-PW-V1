//registros
rutas.route("/registro").get(async (req, res, next) => {
    res.render("registerForm", {
      layout: "../layouts/register",
    });
  });

rutas.route("/registro2").post(async (req, res, next) => {
    req.session.tempUser = {};
    req.session.tempUser = { nombre: req.body.name, apellido: req.body.lastname };
  
    res.render("registerForm2", {
      layout: "../layouts/register",
    });
  });
  

rutas.route("/registro3").post(async (req, res, next) => {
    req.session.tempUser = { ...req.session.tempUser, dni: req.body.dni };
    res.render("registerForm3", {
      layout: "../layouts/register",
    });
  });
  
rutas.route("/registro4").post(async (req, res, next) => {
    req.session.tempUser = {
      ...req.session.tempUser,
      correo: req.body.email,
      clave: req.body.password,
      telefono: req.body.phone,
    };
    res.render("registerForm4", {
      layout: "../layouts/register",
    });
  });
  
rutas.route("/registro5").post(async (req, res, next) => {
    req.session.tempUser = {
      ...req.session.tempUser,
      departamento: req.body.departamentos,
      provincia: req.body.provincias,
      distrito: req.body.distritos,
    };
    res.render("registerForm5", {
      layout: "../layouts/register",
    });
  });
  
rutas.route("/registrar").post(async (req, res, next) => {
    req.session.tempUser = {
      ...req.session.tempUser,
      pep: req.body.PEP ? true : false,
      admin: false,
    };
  
    await insert(req.session.tempUser)
      .then(async () => {
        req.session.user = req.session.tempUser;
        req.session.tempUser = {};
        res.redirect("/cliente");
      })
      .catch((error) => {
        console.log("Ocurrio un error en el insert", error);
      });
  });
rutas.route("/categorias").get(async (req, res, next) => {
    let categories = await queryCategories().catch((error) => {
      console.log("Ocurrio un error en el query", error);
    });
    res.render("tableCategories", {
      categories: categories,
      layout: "../layouts/categories",
    });
  });
  
rutas.route("/agregar-categoria").post(async (req, res, next) => {
    await insertCat({ nombre: req.body.nombre }).catch((error) => {
      console.log("Ocurrio un error en el insert", error);
    });
    res.redirect("/categorias");
  });
  
rutas.route("/eliminar-categoria").post(async (req, res, next) => {
    await deleteCategory(req.body.id).catch((error) => {
      console.log("Ocurrio un error en el delete", error);
    });
    res.redirect("/categorias");
  });
  
rutas.route("/editar-categoria").post(async (req, res, next) => {
    // Debo ir a la BD a obtener la informacion
    // y mostrarla en un form
    await queryCategories(req.body.id)
      .then((reg) => {
        res.render("editCategoryForm", {
          category: reg,
          layout: "../layouts/edit",
        });
      })
      .catch((error) => {
        console.log("Error en queryCategories ", error);
      });
  });
  
  rutas.route("/actualizar-categoria").post(async (req, res, next) => {
    await updateCategory(req.body.id, req.body.nombre).catch((error) => {
      console.log("error en actualizar...");
    });
    res.redirect("/categorias");
  });
  rutas.route("/juegos").get(async (req, res, next) => {
  let games = await queryGames().catch((error) => {
    console.log("Ocurrio un error en el query", error);
  });
  let categories = await queryCategories().catch((error) => {
    console.log("Error en queryCategories ", error);
  });
  res.render("tableGames", {
    games: games,
    categories: categories,
    layout: "../layouts/games",
  });
});

rutas.route("/agregar-juego").post(async (req, res, next) => {
  await insertGame({
    categoria: req.body.categorias,
    nombre: req.body.nombre,
  }).catch((error) => {
    console.log("Ocurrio un error en el insert", error);
  });
  res.redirect("/juegos");
});

rutas.route("/eliminar-juego").post(async (req, res, next) => {
  await deleteGame(req.body.id).catch((error) => {
    console.log("Ocurrio un error en el delete", error);
  });
  res.redirect("/juegos");
});

rutas.route("/editar-juego").post(async (req, res, next) => {
  let categories = await queryCategories().catch((error) => {
    console.log("Error en queryCategories ", error);
  });
  let games = await queryGames().catch((error) => {
    console.log("Error en queryGames ", error);
  });

  res.render("editGameForm", {
    game: games.filter((game) => game.id == req.body.id),
    categories: categories,
    layout: "../layouts/edit",
  });
});

rutas.route("/actualizar-juego").post(async (req, res, next) => {
  await updateGame(req.body.id, req.body.nombre, req.body.categorias).catch(
    (error) => {
      console.log("error en actualizar...");
    }
  );
  res.redirect("/juegos");
});

rutas.route("/partidas-admin").get(async (req, res, next) => {
  let matches = await queryMatches().catch((error) => {
    console.log("Ocurrio un error en el query", error);
  });
  let games = await queryGames().catch((error) => {
    console.log("Error en querygames ", error);
  });
  res.render("tableMatchesAdmin", {
    matches: matches,
    games: games,
    layout: "../layouts/matchesAdmin",
  });
});

rutas.route("/agregar-partida").post(async (req, res, next) => {
  await insertMatch({
    juego: req.body.juegos,
    fecha: req.body.fecha,
    horaInicio: req.body.horaInicio,
    duracion: req.body.duracion,
    estado: req.body.estados,
    equipoA: req.body.equipoA,
    equipoB: req.body.equipoB,
    factorGanadorA: req.body.factorGanadorA,
    factorGanadorB: req.body.factorGanadorB,
    resultado: req.body.resultados,
  }).catch((error) => {
    console.log("Ocurrio un error en el insert", error);
  });
  res.redirect("/partidas-admin");
});

rutas.route("/eliminar-partida").post(async (req, res, next) => {
  await deleteMatch(req.body.id).catch((error) => {
    console.log("Ocurrio un error en el delete", error);
  });
  res.redirect("/partidas-admin");
});

rutas.route("/editar-partida").post(async (req, res, next) => {
  let games = await queryGames().catch((error) => {
    console.log("Error en querygames ", error);
  });
  let matches = await queryMatches().catch((error) => {
    console.log("Error en queryGames ", error);
  });

  res.render("editMatchForm", {
    matches: matches.filter((match) => match.id == req.body.id),
    games: games,
    layout: "../layouts/edit",
  });
});

rutas.route("/actualizar-partida").post(async (req, res, next) => {
  await updateMatch(
    req.body.id,
    req.body.juegos,
    req.body.horaInicio,
    req.body.duracion,
    req.body.estados,
    req.body.equipoA,
    req.body.equipoB,
    req.body.factorGanadorA,
    req.body.factorGanadorB,
    req.body.resultados
  ).catch((error) => {
    console.log("error en actualizar...");
  });
  res.redirect("/partidas-admin");
});

rutas.route("/clientes").get(async (req, res, next) => {
  let users;
  users = await query().catch((error) => {
    console.log("Ocurrio un error en el query", error);
  });
  res.render("tableUsers", {
    users: users,
    layout: "../layouts/clients",
  });
});

module.exports = rutas;
