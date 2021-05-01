import firebase from './firebase';

const db = firebase.ref('attacks');

const save = (attack, index = -1) => {
  if (index == -1) {
    db.push(attack);
  } else {
    db.update({ index: attack });
  }
}

const getAll = () => {
  return db;
}

export default {
  getAll,
  save
}
