import ichwani from "../assets/imageDosen/Ichwani.webp";
import masFierna from "../assets/imageDosen/Mas fierna.webp";
import dewiPurnama from "../assets/imageDosen/Dewi.webp";
import heriKurnia from "../assets/imageDosen/Heri kurnia.webp";
import dedeSiswandi from "../assets/imageDosen/R dede.webp";
import etyHayati from "../assets/imageDosen/Eti.webp";
import roniRustandi from "../assets/imageDosen/roni.webp";
import lathifahSandra from "../assets/imageDosen/Lathifah .webp";
import nurullitaSari from "../assets/imageDosen/Nurullita Sari.webp";
import raistinNurAbidin from "../assets/imageDosen/Raistin Nur Abidin.webp";
import yayukMujiRahayu from "../assets/imageDosen/Yayuk Muji Rahayu.webp";
import herdiWismaJaya from "../assets/imageDosen/Herdi.webp";
import endangPrastini from "../assets/imageDosen/Endang prastini.webp";
import setiawati from "../assets/imageDosen/Setiawati.webp";
import sulastri from "../assets/imageDosen/Sulastri.webp";
import abiRobian from "../assets/imageDosen/Abi Robian.webp";
import saepudinKarta from "../assets/imageDosen/Saepudin.webp";
import susi from "../assets/imageDosen/Susi.webp";
import sugiyanto from "../assets/imageDosen/sugiyanto.webp";
import suanto from "../assets/imageDosen/Suanto.webp";
import ekaSetiana from "../assets/imageDosen/Eka Setiana,.webp";
import diniHandayani from "../assets/imageDosen/Dini handayani.webp";
import muhammadSuheppy from "../assets/imageDosen/Muhammad Suheppy.webp";
import supandri from "../assets/imageDosen/Supandri.webp";
import ivanaAprillia from "../assets/imageDosen/Ivana Aprillia Harlyanikova,.webp";
import yattiRosmiati from "../assets/imageDosen/Yatti.webp";
import linaMarlina from "../assets/imageDosen/Lina Marlina.webp";
import ahmadNanaMahmur from "../assets/imageDosen/Ahmad nana.webp";
import nengNurhemah from "../assets/imageDosen/Neng Nurhemah.webp";

const fotoByNama = new Map([
  ["Dr. Ichwani Siti Utami, S.Pd., M.H", ichwani],
  ["Mas Fierna J.L.P, S.Pd., M.Pd", masFierna],
  ["Dewi Purnama Sari, M.Pd", dewiPurnama],
  ["Heri Kurnia, S.Pd., M.Pd", heriKurnia],
  ["Dr. R. Dede Siswandi, S.Sos., M.Pd", dedeSiswandi],
  ["Ety Hayati, M.Pd", etyHayati],
  ["Roni Rustandi, S.Pd., M.H", roniRustandi],
  ["Lathifah Sandra Devi, M.Pd", lathifahSandra],
  ["Nurullita Sari, S.Pd., M.H", nurullitaSari],
  ["Raistin Nur Abidin, M.Pd", raistinNurAbidin],
  ["Yayuk Muji Rahayu, M.Pd", yayukMujiRahayu],
  ["Dr. Herdi Wisma Jaya, S.Pd., M.H", herdiWismaJaya],
  ["Endang Prastini, S.Pd., M.H", endangPrastini],
  ["Setiawati, S.Pd., M.H", setiawati],
  ["Sulastri, S.Pd., M.H", sulastri],
  ["Abi Robian, S.Pd., M.H", abiRobian],
  ["Saepudin Karta Sasmita, M.Pd", saepudinKarta],
  ["Susi, M.Pd", susi],
  ["Dr. Sugiyanto, S.Ip", sugiyanto],
  ["Suanto, S.Pd., M.H", suanto],
  ["Eka Setiana, S.Pd., M.H", ekaSetiana],
  ["Dini Handayani, S.Pd., M.H", diniHandayani],
  ["Muhammad Suheppy, S.Pd., M.Pd", muhammadSuheppy],
  ["Supandri, M.H", supandri],
  ["Ivana Aprillia Harlyanikova, M.H", ivanaAprillia],
  ["Dr. Yatti Rosmiati, M.Pd", yattiRosmiati],
  ["Lina Marlina, S.Pd., M.Pd", linaMarlina],
  ["Dr. Ahmad Nana Mahmur, M.Pd", ahmadNanaMahmur],
  ["Dr. Dra. Neng Nurhemah, M.Pd", nengNurhemah],
]);

export function getStrukturFotoByNama(nama = "") {
  return fotoByNama.get(nama) || null;
}
