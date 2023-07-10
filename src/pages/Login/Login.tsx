import {
  Card, CardBody,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Icon
} from "@chakra-ui/react";
import { PiUserCircleBold } from "react-icons/pi"
import { useState } from "react"
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    console.log('clicou');
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        senha: password
      });
      console.log('response :>> ', response);
    } catch (error) {
      console.error('Ocorreu um erro', error)
    }
  }

  return (
    <>

      <Card p={8} rounded={12} bg={"blackAlpha.400"}>
        <CardBody>
          <Flex justify={"center"} mb={8}>
            <Icon as={PiUserCircleBold} color={"purple.500"} boxSize={50} />
          </Flex>


          <Flex flexDir={"column"} gap={6}>
            <FormControl>
              <FormLabel fontSize={"20"} color={"purple.300"}>Email </FormLabel>
              <Input placeholder={"E-mail"}
                color={"blue.500"}
                bg={"ActiveCaption"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"20"} color={"purple.300"}>Senha </FormLabel>
              <Input placeholder={"Senha"} color={"blue.500"} bg={"ActiveCaption"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Button onClick={handleLogin} colorScheme="purple">ACESSAR</Button>
          </Flex>

        </CardBody>
      </Card>

    </>
  );
}
