import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./ContactPage.module.css";

const states = [
  { uf: "AC", name: "Acre" },
  { uf: "AL", name: "Alagoas" },
  { uf: "AP", name: "Amapá" },
  { uf: "AM", name: "Amazonas" },
  { uf: "BA", name: "Bahia" },
  { uf: "CE", name: "Ceará" },
  { uf: "DF", name: "Distrito Federal" },
  { uf: "ES", name: "Espírito Santo" },
  { uf: "GO", name: "Goiás" },
  { uf: "MA", name: "Maranhão" },
  { uf: "MT", name: "Mato Grosso" },
  { uf: "MS", name: "Mato Grosso do Sul" },
  { uf: "MG", name: "Minas Gerais" },
  { uf: "PA", name: "Pará" },
  { uf: "PB", name: "Paraíba" },
  { uf: "PR", name: "Paraná" },
  { uf: "PE", name: "Pernambuco" },
  { uf: "PI", name: "Piauí" },
  { uf: "RJ", name: "Rio de Janeiro" },
  { uf: "RN", name: "Rio Grande do Norte" },
  { uf: "RS", name: "Rio Grande do Sul" },
  { uf: "RO", name: "Rondônia" },
  { uf: "RR", name: "Roraima" },
  { uf: "SC", name: "Santa Catarina" },
  { uf: "SP", name: "São Paulo" },
  { uf: "SE", name: "Sergipe" },
  { uf: "TO", name: "Tocantins" },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo."),
  email: z.string().trim().email("Informe um e-mail válido."),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/\D/g, "").length >= 10, {
      message: "Informe um telefone com DDD.",
    })
    .refine((value) => value.replace(/\D/g, "").length <= 11, {
      message: "O telefone deve ter no máximo 11 dígitos.",
    }),
  personType: z.enum(["pessoa-fisica", "pessoa-juridica"], {
    message: "Selecione pessoa física ou jurídica.",
  }),
  reason: z.string().min(1, "Selecione o motivo do contato."),
  city: z
    .string()
    .trim()
    .min(2, "Informe sua cidade com pelo menos 2 caracteres.")
    .max(100, "O nome da cidade deve ter no máximo 100 caracteres.")
    .regex(
      /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u,
      "Use apenas letras, espaços, hífen ou apóstrofo no nome da cidade.",
    ),
  state: z
    .string()
    .refine((value) => states.some((state) => state.uf === value), {
      message: "Selecione seu estado ou UF.",
    }),
});

const reasons = [
  "Consulta jurídica",
  "Dúvida sobre serviços",
  "Parceria profissional",
  "Outro assunto",
];

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      personType: "",
      reason: "",
      city: "",
      state: states[0].uf,
    },
  });

  const onSubmit = () => {
    setSubmitted(true);
    reset();
  };

  const fieldError = (field) =>
    errors[field] ? (
      <span className={styles.error} id={`${field}-error`} role="alert">
        {errors[field].message}
      </span>
    ) : null;

  return (
    <main className={styles.page}>
      <section
        className={styles.contactSection}
        aria-labelledby="contact-title"
      >
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Estamos à disposição</p>
          <h1 className={styles.title} id="contact-title">
            Entre em contato
          </h1>
          <p className={styles.description}>
            Conte um pouco sobre você e o motivo do contato. Nossa equipe
            retornará assim que possível.
          </p>
        </header>

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.field}>
            <label htmlFor="name">Nome completo</label>
            <input
              id="name"
              autoComplete="name"
              placeholder="Ex.: Maria da Silva"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {fieldError("name")}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="voce@exemplo.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {fieldError("email")}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Telefone / WhatsApp</label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {fieldError("phone")}
          </div>

          <div className={styles.field}>
            <label htmlFor="state">Estado / UF</label>
            <select
              id="state"
              autoComplete="address-level1"
              aria-invalid={Boolean(errors.state)}
              aria-describedby={errors.state ? "state-error" : undefined}
              {...register("state")}
            >
              <option value="">Selecione seu estado</option>
              {states.map((state) => (
                <option key={state.uf} value={state.uf}>
                  {state.name} ({state.uf})
                </option>
              ))}
            </select>
            {fieldError("state")}
          </div>

          <div className={styles.field}>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              autoComplete="address-level2"
              placeholder="Sua cidade"
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "city-error" : undefined}
              {...register("city")}
            />
            {fieldError("city")}
          </div>

          <fieldset className={`${styles.field} ${styles.typeField}`}>
            <legend>Você é pessoa física ou jurídica?</legend>
            <div className={styles.radioGroup}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  value="pessoa-fisica"
                  aria-invalid={Boolean(errors.personType)}
                  aria-describedby={
                    errors.personType ? "personType-error" : undefined
                  }
                  {...register("personType")}
                />
                <span>Pessoa física</span>
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  value="pessoa-juridica"
                  aria-invalid={Boolean(errors.personType)}
                  aria-describedby={
                    errors.personType ? "personType-error" : undefined
                  }
                  {...register("personType")}
                />
                <span>Pessoa jurídica</span>
              </label>
            </div>
            {fieldError("personType")}
          </fieldset>

          <div className={`${styles.field} ${styles.reasonField}`}>
            <label htmlFor="reason">Motivo do contato</label>
            <select
              id="reason"
              aria-invalid={Boolean(errors.reason)}
              aria-describedby={errors.reason ? "reason-error" : undefined}
              {...register("reason")}
            >
              <option value="">Selecione uma opção</option>
              {reasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            {fieldError("reason")}
          </div>

          <div className={styles.formFooter}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Enviar contato
            </button>
            {submitted && (
              <p className={styles.successMessage} role="status">
                Dados validados com sucesso. Este formulário ainda não está
                conectado ao envio de mensagens.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};
