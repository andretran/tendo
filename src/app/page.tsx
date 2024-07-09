'use client';

import { useRouter } from "next/navigation";

import Header from "@/common/uikit/header";
import Button from "@/common/uikit/button";
import i18n from '@/common/utils/i18n';

import { useSession } from "@/hooks/useSession";
import { SessionState } from "@/stores/sessionStore";


export default function Home() {
  const router = useRouter();
  const {patient}: SessionState = useSession();

  return (
    <main>
      <Header title={i18n.HOME_TITLE(patient?.name[0].given)} subtitle={i18n.HOME_SUBTITLE} />
      <Button onClick={() => router.push('/survey')} text={i18n.START} />
    </main>
  );
}