const express = require("express");
const router = express.Router();
 
const { body, validationResult } = require("express-validator");
 
 
router.get("/", (req, res) => {
    res.render("pages/index-adm");
});
 
 
router.get("/adm-cliente", (req, res) => {
    res.render("pages/adm-cliente");
});
 
 
router.get("/adm-cliente-novo", (req, res) => {
    res.render("pages/adm-cliente-novo");
});
 
 
// CADASTRO
router.post(
    "/adm-cliente-novo",
 
    [
        body("nome")
            .notEmpty()
            .withMessage("Nome é obrigatório."),
 
        body("cep")
            .notEmpty()
            .withMessage("CEP é obrigatório."),
 
        body("nomeUsuario")
            .notEmpty()
            .withMessage("Nome de usuário é obrigatório."),
 
        body("email")
            .notEmpty()
            .withMessage("E-mail é obrigatório.")
            .isEmail()
            .withMessage("E-mail inválido."),
 
        body("senha")
            .notEmpty()
            .withMessage("Senha é obrigatória.")
            .isLength({ min: 6 })
            .withMessage("A senha deve ter pelo menos 6 caracteres."),
 
        body("tipo")
            .notEmpty()
            .withMessage("Tipo de usuário é obrigatório."),
 
        body("status")
            .notEmpty()
            .withMessage("Status é obrigatório.")
    ],
 
    (req, res) => {
 
        const erros = validationResult(req);
 
        if (!erros.isEmpty()) {
 
            console.log(erros.array());
 
            return res.render("pages/adm-cliente-novo", {
                erros: erros.array()
            });
        }
 
        console.log("Tudo certo!");
        console.log(req.body);
 
        // INSERT no banco aqui
 
        res.redirect("/adm/adm-cliente-list");
    }
);

// CADASTRO2
router.post(
    "/adm-cliente-edit",
 
    [
        body("nome")
            .notEmpty()
            .withMessage("Nome é obrigatório."),
 
        body("cep")
            .notEmpty()
            .withMessage("CEP é obrigatório."),
 
        body("nomeUsuario")
            .notEmpty()
            .withMessage("Nome de usuário é obrigatório."),
 
        body("email")
            .notEmpty()
            .withMessage("E-mail é obrigatório.")
            .isEmail()
            .withMessage("E-mail inválido."),
 
        body("senha")
            .notEmpty()
            .withMessage("Senha é obrigatória.")
            .isLength({ min: 6 })
            .withMessage("A senha deve ter pelo menos 6 caracteres."),
 
        body("tipo")
            .notEmpty()
            .withMessage("Tipo de usuário é obrigatório."),
 
        body("status")
            .notEmpty()
            .withMessage("Status é obrigatório.")
    ],
 
    (req, res) => {
 
        const erros = validationResult(req);
 
        if (!erros.isEmpty()) {
 
            console.log(erros.array());
 
            return res.render("pages/adm-cliente-edit", {
                erros: erros.array()
            });
        }
 
        console.log("Tudo certo!");
        console.log(req.body);
 
        // INSERT no banco aqui
 
        res.redirect("/adm/adm-cliente-list");
    }
);
 
 
router.get("/adm-cliente-edit", (req, res) => {
    res.render("pages/adm-cliente-edit");
});
 
 
router.get("/adm-cliente-list", (req, res) => {
    res.render("pages/adm-cliente-list");
});
 
 
router.get("/adm-cliente-del", (req, res) => {
    res.render("pages/adm-cliente-del");
});
 
 
module.exports = router;