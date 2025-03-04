import Image from "next/image"
import { Camera, FileType, Calendar, CheckCircle, CreditCard } from "lucide-react"

export function HowItWorksSteps() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Take a Photo",
      description: "Snap a picture of your waste using our app or website",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      icon: <FileType className="h-8 w-8 text-green-600" />,
      title: "Select Waste Type",
      description: "Categorize your waste (paper, plastic, metal, etc.)",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Schedule Pickup",
      description: "Choose a one-time pickup or set a recurring schedule",
      image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Receive Confirmation",
      description: "Get pickup instructions and prepare your waste",
      image: "https://images.unsplash.com/photo-1591193686104-fddba4cb7cf1?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "Get Paid",
      description: "Receive payment based on waste quantity and type",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=200&h=200&auto=format&fit=crop",
    },
  ]

  return (
    <div className="space-y-12">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 items-center`}
        >
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold">
                Step {index + 1}: {step.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src={step.image || "/placeholder.svg"}
                alt={`Step ${index + 1}: ${step.title}`}
                width={200}
                height={200}
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

