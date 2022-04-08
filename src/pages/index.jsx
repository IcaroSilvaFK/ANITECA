import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ButtonBut, ButtonSend } from "../components/Buttons";
import { Footer } from "../components/Footer";
import { client } from "../config/apolloclient";

import { gql } from "@apollo/client";

import {
  Container,
  Box,
  Form,
  Row,
  SectionCards,
  CardsSection,
  NewsSection,
} from "./styles/home.style";

export default function _homePage({ data }) {
  const router = useRouter();

  const emailProps = useForm({
    defaultValues: {
      email: "",
    },
  });

  function registerFormHandler(data) {
    emailProps.reset();
  }

  function handleGetAnime(id) {
    router.push(`/animePage/${id}`);
  }
  console.log(data);

  return (
    <Container>
      <Header />
      <Box>
        <div className="box__containerTitle">
          <h1>
            <span>Assita Animes</span>
            <span>Gratuitamente sem anúncio!</span>
          </h1>
          <div>
            <Image
              src="/assets/Logo-main.png"
              width={300}
              height={300}
              alt="imagem Anime"
            />
          </div>
        </div>
      </Box>
      <SectionCards>
        <div>
          <h2>Animes mais vistos</h2>
        </div>
        <CardsSection>
          {data?.animes.map((element) => (
            <img
              src={element.imageUrl}
              key={element.id}
              onClick={() => handleGetAnime(element.id)}
              height={300}
              width={370}
              alt={element.id}
            />
          ))}
        </CardsSection>
        <div className="containerBut">
          <ButtonBut onClick={() => router.push("/allAnimes")} />
        </div>
      </SectionCards>
      <NewsSection>
        <div className="newsSection__title">
          <h1>
            Nossa <span>Newsletter</span>
          </h1>
          <p>
            Participe da nossa newsletter para receber nossa atualização semanal
            de novos animes!
          </p>
        </div>
        <FormProvider {...emailProps}>
          <Form onSubmit={emailProps.handleSubmit(registerFormHandler)}>
            <Row>
              <MdOutlineAlternateEmail color="#718096" size={25} />
              <Input
                name="email"
                type="email"
                placeholder="Digite aqui seu Email!"
              />
            </Row>
            <ButtonSend />
          </Form>
        </FormProvider>
      </NewsSection>
      <Footer />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const { data, error } = await client.query({
    query: gql`
      query animes {
        animes(limit: 3) {
          imageUrl
          id
        }
      }
    `,
  });

  if (error) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }

  if (session) {
    const { user } = session;

    const { data: addNewUser } = client.mutate({
      mutation: gql`
        mutation {
          createUser(email: "${user.email}") {
           email
          }
        }
      `,
    });
    return {
      props: { user, data },
    };
  }

  return {
    props: { data },
  };
}
