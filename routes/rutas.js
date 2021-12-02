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