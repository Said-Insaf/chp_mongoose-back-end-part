// require express
const express = require("express");
//require express.router pour créer les routes
const router = express.Router();
//require model contact
const Contact = require("../models/Contact");

///// Les routes kol hne

//test route pour savoir si c bon l'express.router fonctionne les routes ou nn
/**
 * @description : testing route
 * @path : http://localhost:7000/api/contacts/test
 * @method : Get
 * @Data : no data
 * @access : public / private
 */
// router.get("./test", (req, res) => {
//   res.send("hello world");
// });
/**
 * @description : add contact
 * @path : http://localhost:7000/api/contacts/
 * @method : Post
 * @Data : req.body
 * @access : public / private
 */
router.post("/", async(req, res) => { 
 
   // 1 ere étape ba3d m3mlna 8 eme etape ta3 middleware f server.js : njib contenu req.body eli 7atineh f postmen , selon modele eli 7dhrneh bch n3mlou contact jdid eli 7dhrneh f req.body , Puis save f Base des données)
 // const newcontact= new Contact ( contact hwa l model eli 3mlnelou require bch yjibli contenu ta3 schema w samineh const Contact donc 3aytlou hne f const newcontact)
  // name, c équivaut de (name : name,) name de schema w name de req.body b écriture es6 ça resume en name,
 
   try {
  const { name, email, phone } = req.body;
 // Pour afficher erreur : name et email obligatoire, are required
  if (!name || !email)
 {res.status(400).send ({msg:'name and email are required!!!'})
return}
//email is unique : Contact.findOne({email}) => contact hki hya l models, car liste de schema mawjouda f model biensur alors lzm yfrkssli f base des données (car  models yrepresenti l collections t3na eli f Base des données, pour accéser au base de données tjrs par models )
const contact = await Contact.findOne({email})
 if (contact) {
     res.statuts(400).send({msg :'contact already exist'})
     return
 }
  const newContact = new Contact({
    name,
    email,
    phone,
  })

// bch nsajll f base des données n3ml save ( save lel new contact eli sna3neha bl modele contact eli 3mlnelou require w jbneh lel const newContact = new Contact)
newContact.save()
res.status(200).send({ msg: "contact added succesfully...", newContact })}
catch (error) {
    res.status(400).send({msg :'can not add contact!!!',error})
}});
/**
 * @description : get all contact
 * @path : http://localhost:7000/api/contacts/
 * @method : Get
 * @Data : no data
 * @access : public / private
 */
router.get('/',async (req,res) => {
try{
    const listContacts = await Contact.find()
  return  res.status(200).send({msg : 'This is all of list contact...',listContacts})

} catch (error) {
    res.status(400).send({msg : 'can not get all contact!!!',error})
}
});
/**
 * @description : get contact
 * @path : http://localhost:7000/api/contacts/test
 * @method : Get
 * @Data : req.params.id
 * @access : public / private
 */
router.get('/:id',async (req,res) => {try {
const contactToGet = await Contact.findOne({_id : req.params.id})
res.status(200).send({msg :'I get the contact qui est entrain de vous rechercher...',contactToGet})
}
catch (error) {
    res.status(400).send({msg : ' I can not get the contact !!!', error})
}
});

/**
 * @description : testing route
 * @path : http://localhost:7000/api/contacts/test
 * @method : Get
 * @Data : no data
 * @access : public / private
 */


/**
 * @description : testing route
 * @path : http://localhost:7000/api/contacts/test
 * @method : Get
 * @Data : no data
 * @access : public / private
 */



module.exports = router
