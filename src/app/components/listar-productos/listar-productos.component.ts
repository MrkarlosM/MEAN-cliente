import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { addDoc, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import {app} from "../../../main";

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})



export class ListarProductosComponent {
  db = getFirestore(app);
  nombre="";
  users="";
  async action(){
    try{const querySnapshot = await getDocs(collection(this.db, "mascotas"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });} 
    catch(error){console.log(error)}
  }

  async crear(){
    const citiesRef = collection(this.db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });
  }

async getDocCit(){
  const docRef = doc(this.db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = docSnap.data()
  console.log("Document data:", data['name']);
  this.nombre=data['name']
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

async userdAdd() {
  const docRef = await addDoc(collection(this.db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e: any) {
  console.error("Error adding document: ", e);
}

}

