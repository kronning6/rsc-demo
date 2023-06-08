'use server';

import teamData from './data.json';

export default async function getTeamMemberName(imgUrl: string): Promise<string> {
  const a = teamData.data.find((i) => i.img === imgUrl);
  return a?.name ?? 'Unknown Kipsuvian';
}

