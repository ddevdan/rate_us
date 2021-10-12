import TextArea from "../../components/TextArea";
import React, { useEffect, useState } from "react";
import Blob from "../../components/Blob";
import Logo from "../../components/Logo";
import RateSelect from "../../components/RateSelect";
import Title from "../../components/Title";
import {
  Div,
  FormWraper,
  HomeWraperTitle,
  ButtonSubmit,
  WrapButton,
} from "./styles";

function Home() {
  const [formFields, setFormFields] = useState({ stars: 0, feedback: "" });
  const handleSubmit = (e) => {
    e.preventDefault();


  };

  return (
    <Div>
      <HomeWraperTitle>
        <Logo />
        <Title text="Avalie sua experiência em nosso site" />
      </HomeWraperTitle>
      <FormWraper onSubmit={handleSubmit}>
        <RateSelect setFormFields={setFormFields} />
        <TextArea setFormFields={setFormFields} />
        <WrapButton>
          <ButtonSubmit type="submit">Enviar</ButtonSubmit>
        </WrapButton>
      </FormWraper>
      <Blob top />
      <Blob blobsType={2} />
    </Div>
  );
}

export default Home;
