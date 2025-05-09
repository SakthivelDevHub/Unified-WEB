import React from 'react';
import { Steps } from 'antd';
import './StepStyles.scss';

const { Step } = Steps;

const CustomSteps: React.FC = () => {
  return (
    <div className="custom-step-wrapper">
      <Steps direction="vertical" current={1}>
        <Step title="Valid your phone" />
        <Step title="Tell about yourself" />
        <Step title="Tell about your company" disabled />
        <Step title="Invite Team Members" disabled />
      </Steps>
    </div>
  );
};

export default CustomSteps;
