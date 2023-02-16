import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Index = ({}: Props) => {
  const router = useRouter();
  const { route } = router;
  useEffect(() => {
    if (route == "/") {
      router.push(`/home`); // default page after login when call root path
    }
  }, [router]);
  return null;
}

export default Index