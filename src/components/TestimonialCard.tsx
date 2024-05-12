import { ReactNode, useEffect, useState } from "react";

type TestimonialCardType = {
    avatarUrl: string;
    title: string;
    subTitle?: string;
    children: ReactNode;
};

const TestimonialCard: React.FC<TestimonialCardType> = (props) => {
    const { children, avatarUrl, title, subTitle } = props;
    const [imgLogo, setImgLogo] = useState<string | undefined>('');

  useEffect(() => {
    const loadImage = async () => {
        try {
          const response = await fetch(`${avatarUrl}`);
          if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImgLogo(imageUrl);
          } else {
            console.error("Failed to fetch image:", response.statusText);
          }
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };

    loadImage();
  }, [avatarUrl]);
    return (
        <div className="flex bg-white sm:w-80 md:w-96 rounded-lg min-h-60 justify-self-center p-4">
            <div className="grid grid-rows-3 w-full">
                <div className="grid row-span-1 grid-cols-4">
                    <div className="col-span-1 flex justify-center items-center">
                        <img src={imgLogo} className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-center">
                        <p className="font-semibold text-left text-lg">{title}</p>
                        {subTitle && (<p className="text-left text-sm">{subTitle}</p>)}
                    </div>
                </div>
                <div className="grid row-span-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;