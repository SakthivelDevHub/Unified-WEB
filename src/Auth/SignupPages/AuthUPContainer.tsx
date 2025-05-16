import { useState } from "react"
import Validurph from "./Validurph";
import Tellabturslf from "./Tellabturslf";
import Tellaboutcompy from "./Tellaboutcompy";
import Invitetm from "./Invitetm";
import Registd from "./registd";

export default function AuthSignUpContainer() {

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));


    return (
        <div>
            {step === 1 && <Validurph next={nextStep} />}
            {step === 2 && <Tellabturslf next={nextStep} prev={prevStep} />}
            {step === 3 && <Tellaboutcompy next={nextStep} prev={prevStep} />}
            {step === 4 && <Invitetm next={nextStep} prev={prevStep} />}
            {step === 5 && <Registd next={nextStep} prev={prevStep}/>}
            {step === 6 && <Validurph next={function (): void {
                throw new Error("Function not implemented.");
            } }/>}
        </div>
    )

}