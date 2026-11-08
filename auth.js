import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// Criar conta
export async function cadastrar(email, senha) {
  const resultado = await createUserWithEmailAndPassword(
    auth,
    email,
    senha
  );

  await setDoc(doc(db, "users", resultado.user.uid), {
    email: resultado.user.email,
    createdAt: serverTimestamp()
  });

  return resultado.user;
}

// Entrar na conta
export async function entrar(email, senha) {
  const resultado = await signInWithEmailAndPassword(
    auth,
    email,
    senha
  );

  return resultado.user;
}

// Sair da conta
export async function sair() {
  await signOut(auth);
}

// Observar se o usuário está conectado
export function observarUsuario(callback) {
  return onAuthStateChanged(auth, callback);
}
