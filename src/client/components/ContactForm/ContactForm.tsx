import React, { useState } from "react";
import { Input, Textarea } from "@ui/components";
import {
  StyledNameInput,
  Row,
  ContactFormContainer,
  BottomContainer,
  StyledCheckBox,
  StyledButton,
} from "./styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [accept, setAccept] = useState(false);

  return (
    <ContactFormContainer>
      <Row>
        <StyledNameInput
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="E-mail для ответа"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Row>
      <Textarea
        placeholder="Ваше сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <BottomContainer>
        <StyledCheckBox value={accept} onChange={setAccept}>
          Подтверждаю, что я ознакомлен и согласен с условиями политики
          конфиденциальности
        </StyledCheckBox>
        <StyledButton>Отправить сообщение</StyledButton>
      </BottomContainer>
    </ContactFormContainer>
  );
};
