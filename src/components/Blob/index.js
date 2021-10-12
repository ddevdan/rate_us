import React from "react";
import Blob1 from "../../assets/images/blob1.svg";
import Blob2 from "../../assets/images/blob2.svg";
import { Img } from './styles';
const BLOBS = { 1: Blob1, 2: Blob2 };

function Blob({ blobsType = 1, top  }) {
  return <Img alt src={BLOBS[blobsType]} top={top} />;
}

export default Blob;
