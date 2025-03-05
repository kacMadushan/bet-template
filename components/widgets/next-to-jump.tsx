import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function NextToJump() {
    return (
        <div className="bg-background-dark text-text-high-contrast">
            <div className="wrapper">
                <div className="flex items-center gap-x-16">
                    <div className="flex items-center gap-x-1">
                        <div className="bg-[#18975A] text-text-high-contrast border-b-4 border-[#01472E] px-4 py-4">
                            <span className="uppercase font-bold">T</span>
                        </div>
                        <div className="bg-[#18975A] text-text-high-contrast border-b-4 border-[#01472E] px-4 py-4">
                            <span className="uppercase font-bold">H</span>
                        </div>
                        <div className="bg-[#18975A] text-text-high-contrast border-b-4 border-[#01472E] px-4 py-4">
                            <span className="uppercase font-bold">G</span>
                        </div>

                    </div>
                    <div className="flex flex-1">
                        <Carousel className="w-full max-w-7xl">
                            <CarouselContent>
                                {Array.from({ length: 20 }).map((_, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/7">
                                        <div className="flex items-center gap-x-3 py-1">
                                            <span className="text-[14px]">R1</span>
                                            <span className="text-[14px]">Angle Park</span>
                                            <span className="text-[14px]">1m 55s</span>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="bg-[#1a1a1a] border-[#1a1a1a]" />
                            <CarouselNext className="bg-[#1a1a1a] border-[#1a1a1a]" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}