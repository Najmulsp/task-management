import JobFooter from "./JobFooter";
import JobHeader from "./JobHeader";
import OurClients from "./OurClients";
import banner from "@/assets/banner.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Jobs = () => {
  return (
    <div className="grid-background w-full max-w-[1440px] mx-auto">
      <JobHeader />
      <div>
        <img src={banner} className="w-full mx-auto border mb-10" alt="Banner" />
      </div>
      <main>
        {/* card section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Accordion */}
        <section className="w-[840px] mx-auto">
          <h1 className="text-4xl font bold text-center py-4">Your question and our answer</h1>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </section>

        <OurClients />
      </main>

      <JobFooter />
    </div>
  );
};

export default Jobs;
