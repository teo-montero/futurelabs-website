import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Users, Building2, Handshake, GraduationCap } from 'lucide-react';

export function FAQ() {
  const faqData = {
    students: [
      {
        question: "What is FutureLabs?",
        answer: "FutureLabs is the UK's first student-run pro bono digital consultancy. We connect talented students with organizations to deliver high-quality digital solutions while providing students with real-world experience."
      },
      {
        question: "Who can apply to join FutureLabs?",
        answer: "We welcome students from all universities and disciplines. Whether you're studying computer science, business, design, marketing, or any other field, if you're passionate about making a positive impact and gaining professional experience, we'd love to hear from you."
      },
      {
        question: "Do I need prior professional experience?",
        answer: "No prior professional experience is required! What matters most is your enthusiasm to learn, contribute to meaningful projects, and develop your skills in a collaborative environment."
      },
      {
        question: "What skills can I develop at FutureLabs?",
        answer: "Students can develop technical skills (web development, data analysis, digital marketing), soft skills (client communication, project management, teamwork), and industry knowledge across nonprofit and social impact sectors."
      },
      {
        question: "How does the application process work?",
        answer: "Our application process includes submitting your CV and a brief application form, followed by an interview where we discuss your interests, experiences, and goals."
      },
    ],
    clients: [
      {
        question: "What services does FutureLabs offer?",
        answer: "We provide comprehensive digital solutions including website development, digital marketing campaigns, data analysis, automation tools, brand identity design, and strategic digital transformation consulting—all tailored for organizations."
      },
      {
        question: "Who is eligible for FutureLabs services?",
        answer: "We work exclusively with any charities, social enterprises, and mission-driven organizations that are making a positive impact in their communities or globally."
      },
      {
        question: "How much do FutureLabs services cost?",
        answer: "All of our services are provided completely free of charge. This is part of our commitment to supporting nonprofit organizations and providing students with meaningful pro bono experience."
      },
      {
        question: "What is the typical project timeline?",
        answer: "Project timelines vary depending on scope and complexity, typically ranging from 3-16 weeks. During our initial consultation, we'll provide a detailed timeline and project plan tailored to your specific needs and requirements."
      },
      {
        question: "How do you ensure quality despite being student-run?",
        answer: "All projects are supervised by experienced consultants and industry professionals. We follow established best practices, conduct thorough quality reviews, and maintain regular client communication throughout the project lifecycle."
      },
      {
        question: "What information do you need to start a project?",
        answer: "We'll need details about your organization, project goals, target audience, existing digital assets, budget constraints (if any), timeline expectations, and specific requirements or preferences you have for the final deliverables."
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes! We provide documentation, training for your team, and a period of transition support to ensure you can effectively manage and maintain the solutions we've delivered."
      }
    ],
    partnerships: [
      {
        question: "[TO BE COMPLETED WITH QUESTION]",
        answer: "[TO BE COMPLETED WITH ANSWER]"
      }
    ]
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold gradient-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about joining FutureLabs, our services, and partnership opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up delay-200">
          <Accordion type="single" collapsible className="space-y-6">
            {/* Students FAQ */}
            <AccordionItem value="students" className="border border-gray-200 rounded-3xl bg-white shadow-lg">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-futurelabs-blue/10">
                    <GraduationCap className="w-6 h-6 text-futurelabs-blue" />
                  </div>
                  <h3 className="text-3xl text-gray-900">For Students</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.students.map((item, index) => (
                    <AccordionItem 
                      key={`student-${index}`} 
                      value={`student-${index}`}
                      className="border border-gray-200 rounded-xl px-6 bg-gray-50/50 shadow-sm"
                    >
                      <AccordionTrigger className="text-left hover:no-underline text-gray-800 py-4 text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed text-sm">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Clients FAQ */}
            <AccordionItem value="clients" className="border border-gray-200 rounded-3xl bg-white shadow-lg">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-futurelabs-purple-glow/10">
                    <Building2 className="w-6 h-6 text-futurelabs-purple-glow" />
                  </div>
                  <h3 className="text-3xl text-gray-900">For Clients</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.clients.map((item, index) => (
                    <AccordionItem 
                      key={`client-${index}`} 
                      value={`client-${index}`}
                      className="border border-gray-200 rounded-xl px-6 bg-gray-50/50 shadow-sm"
                    >
                      <AccordionTrigger className="text-left hover:no-underline text-gray-800 py-4 text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed text-sm">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            {/* Partnerships FAQ */}
            <AccordionItem value="partnerships" className="border border-gray-200 rounded-3xl bg-white shadow-lg">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-futurelabs-blue/10">
                    <Handshake className="w-6 h-6 text-futurelabs-blue" />
                  </div>
                  <h3 className="text-3xl text-gray-900">For Partnerships</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.partnerships.map((item, index) => (
                    <AccordionItem 
                      key={`partnership-${index}`} 
                      value={`partnership-${index}`}
                      className="border border-gray-200 rounded-xl px-6 bg-gray-50/50 shadow-sm"
                    >
                      <AccordionTrigger className="text-left hover:no-underline text-gray-800 py-4 text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed text-sm">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-slide-up delay-400">
          <p className="text-lg text-gray-600 mb-6">
            Can't find the answer you're looking for?
          </p>
          <p className="text-futurelabs-blue">
            Feel free to reach out to us directly and we'll be happy to help!
          </p>
        </div>
      </div>
    </section>
  );
}