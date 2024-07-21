"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";

const signInSchema = z.object({
  email: z
    .string({
      required_error: "E-mail é obrigatório",
    })
    .email({
      message: "E-mail inválido",
    }),
  password: z
    .string({
      required_error: "Senha é obrigatória",
    })
    .min(8, {
      message: "Senha deve ter no mínimo 8 caracteres",
    }),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export const SignInForm = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = ({ email, password }: SignInFormValues) => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <Form {...form}>
      <Card className="w-full h-full p-8 border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Bem-vindo de volta! 👋</CardTitle>
          <CardDescription>Faça login para continuar.</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0 space-y-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="email@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="••••••••" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full !mt-4" type="submit">
              Entrar
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Não possui conta?{" "}
            <Link
              href="/criar-conta"
              className="font-semibold text-gray-500 transition-colors hover:text-black"
            >
              Criar uma conta
            </Link>
          </p>
        </CardContent>
      </Card>
    </Form>
  );
};
