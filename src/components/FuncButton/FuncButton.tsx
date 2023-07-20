import { Button } from "@chakra-ui/react";

interface FuncButtonProps {
  buttonText: string
  MyColorScheme?: string  // ? significa que não é obrigatorio
  myOnClick?: ()=> void
}

export function FuncButton({ buttonText, MyColorScheme, myOnClick }: FuncButtonProps) {


  return (
    <>
      <Button colorScheme={MyColorScheme} onClick={myOnClick}>
        {buttonText} 
      </Button>
    </>
  );
}