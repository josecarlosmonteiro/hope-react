import React, { BaseSyntheticEvent, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import useAuthentication from "../hooks/useAuthentication";

const ContainerAccesses = () => {
  const [formValues, setFormValues] = useState<any>({});
  const [tabValue, setTabValue] = useState<string>("entrar");

  const { checkLogin } = useAuthentication(formValues);

  const handleTabChange = (
    event: BaseSyntheticEvent,
    newValue: "entrar" | "cadastro"
  ) => {
    setTabValue(newValue);
  };

  const handleFormValue = (event: BaseSyntheticEvent) => {
    event.persist();

    const {
      target: { name, value },
    } = event;

    setFormValues((oldState: any) => ({ ...oldState, [name]: value }));
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    if (tabValue === "entrar") {
      if (checkLogin()) {
        alert("Login checked!");
        return;
      }

      console.info("Login failed");
      return;
    } else {
      console.info("submit para cadastro", formValues);
    }

    setFormValues({});
  };

  return (
    <Box
      sx={{
        minWidth: "260px",
        color: "white",
        backgroundColor: "#23349802",
        borderRadius: "4px",
        boxShadow: "0px 2px 8px 2px silver",
        padding: "22px",
      }}
    >
      <Tabs
        sx={{ marginBottom: 2 }}
        value={tabValue}
        onChange={handleTabChange}
      >
        <Tab
          value="entrar"
          onChange={() => setTabValue("entrar")}
          label="entre"
        />
        <Tab
          value="cadastro"
          onChange={() => setTabValue("cadastro")}
          label="cadastre-se"
        />
      </Tabs>
      <form onSubmit={handleSubmit}>
        {tabValue === "entrar" && (
          <>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                type="text"
                name="username"
                label="Usuário"
                variant="standard"
                onChange={handleFormValue}
                value={formValues.username || ""}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 4 }}>
              <TextField
                name="password"
                type="password"
                label="Senha"
                variant="standard"
                onChange={handleFormValue}
                value={formValues.password || ""}
                fullWidth
              />
            </Box>
          </>
        )}
        {tabValue === "cadastro" && (
          <>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                type="text"
                name="username"
                label="Usuário"
                variant="standard"
                onChange={handleFormValue}
                value={formValues.username || ""}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                name="password"
                type="password"
                label="Senha"
                variant="standard"
                onChange={handleFormValue}
                value={formValues.password || ""}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 4 }}>
              <TextField
                name="secondPassword"
                type="password"
                label="Repita a senha"
                variant="standard"
                onChange={handleFormValue}
                value={formValues.secondPassword || ""}
                fullWidth
              />
            </Box>
          </>
        )}

        <Button type="submit" variant="contained">
          {tabValue === "entrar" ? "entrar" : "cadastre-se"}
        </Button>
      </form>
    </Box>
  );
};

export default function Login() {
  return (
    <Grid
      container
      spacing={3}
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Box padding="14px">
          <Typography
            sx={{ margin: 0 }}
            variant="h3"
            textAlign="center"
            marginBottom="28px"
          >
            HOPE 2
          </Typography>
          <hr />
          <br />
          <ContainerAccesses />
        </Box>
      </Grid>
    </Grid>
  );
}
