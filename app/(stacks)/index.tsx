import React from "react";
import { Redirect } from "expo-router";
import { baseUrl } from "@/utils/constants";
import { toBase64Url } from "@/utils/encoding";

export default function Index() {
  return <Redirect href={`/(stacks)/${toBase64Url(baseUrl)}`} />;
}
