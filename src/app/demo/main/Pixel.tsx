'use client';

import { useEffect, useState } from 'react';
import getTeamMemberName from './action';
import TeamMemberInfo from './TeamMemberInfo';

function PixelLoading({
    backgroundColor,
  } : {
    backgroundColor: string,
  }) {
  return (
    <div className="text-lg m-1 h-36 w-56 bg-[#7aa2f7] text-[#9ece6a] inline-flex items-center justify-center cursor-pointer rounded" style={{backgroundColor: `${backgroundColor}`}}>
      <div role="status" className="inline-flex animate-pulse h-full w-full">
        <div className="inline-flex items-center justify-center h-full w-full bg-[#565f89]">
          <svg className="w-20 h-20 text-gray-200"
               xmlns="http://www.w3.org/2000/svg"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 640 512">
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PixelBackside({
    backgroundColor,
    name,
    showImage,
  } : {
    backgroundColor: string,
    name: string,
    showImage: () => void,
  }) {
  return (
    <div className="text-lg text-center m-1 h-36 w-56 bg-[#7aa2f7] text-[#ffffff] inline-flex items-center justify-center cursor-pointer rounded"
         style={{backgroundColor: `${backgroundColor}`}}
         onMouseLeave={() => showImage()}>
      {name}
    </div>
  );
}

export default function Pixel({
    teamMember,
  }: {
    teamMember: TeamMemberInfo,
  }) {
  const [name, setName] = useState(teamMember.name);
  const [showImage, setShowImage] = useState(false);
  const [showBackside, setShowBackside] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, teamMember.delay);
  }, [])

  if (showImage) {
    return <img className="m-1 h-36 w-56 inline-flex items-center justify-center cursor-pointer rounded" src={teamMember.img} onClick={async () => {
      setName(await getTeamMemberName(teamMember.img));
      setShowBackside(true);
      setShowImage(false);
    }} />;
  } else if(showBackside) {
    return <PixelBackside backgroundColor={teamMember.color} name={name} showImage={() => { setShowImage(true); setShowBackside(false); }} />;
  }
  // return <PixelLoading backgroundColor={teamMember.color} />;
  return <PixelBackside backgroundColor={teamMember.color} name={name} showImage={() => { setShowImage(true); setShowBackside(false); }} />;

}

