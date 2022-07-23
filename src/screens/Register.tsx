import { VStack } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/input";
import { Button } from "../components/Button";

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova Solicitação" />
      <Input placeholder="Número do Patrimônio" mt={5} />

      <Input
        placeholder="Descrição do problema"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
      />

      <Button title="Cadastrar" mt={5} />
    </VStack>
  );
}