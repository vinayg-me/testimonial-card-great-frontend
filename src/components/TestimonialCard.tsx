import { ReactNode } from "react";

type TestimonialCardType = {
    avatarUrl: string;
    title: string;
    subTitle?: string;
    children: ReactNode;
};

const TestimonialCard: React.FC<TestimonialCardType> = (props) => {
    const { children, avatarUrl, title, subTitle } = props;

    return (
        <div className="flex bg-white sm:w-80 md:w-96 rounded-lg min-h-60 justify-self-center p-4">
            <div className="grid grid-rows-3 w-full">
                <div className="grid row-span-1 grid-cols-4">
                    <div className="col-span-1 flex justify-center items-center">
                        <img src={avatarUrl} alt="Testimonial Profile Picture" className="w-12 h-12 rounded-full" loading="lazy" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-center break-words">
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