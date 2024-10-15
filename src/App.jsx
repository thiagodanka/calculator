import { useState } from "react";
import {
  Button,
  Container,
  Content,
  Display,
  Layout,
  Row,
  Input,
  Indicator
} from "./components/Style/Style";

function App() {
  const [value, setValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [indicator, setIndicator] = useState('');

  const handleButtonClick = (content) => {
    if (['+', '-', '*', '/'].includes(content)) {
      setFirstValue(parseFloat(value));
      setValue('0');
      setOperator(content);
      setIndicator(content);
    } else if (content === '=') {
      if (!operator || firstValue === null) return;

      const secondValue = parseFloat(value);
      let result = 0;

      switch (operator) {
        case '+':
          result = firstValue + secondValue;
          break;
        case '-':
          result = firstValue - secondValue;
          break;
        case '*':
          result = firstValue * secondValue;
          break;
        case '/':
          result = firstValue / secondValue;
          break;
        default:
          break;
      }

      setValue(result.toString());
      setFirstValue(null);
      setOperator(null);
      setIndicator('');
    } else if (content === 'C') {
      setValue('0');
      setFirstValue(null);
      setOperator(null);
      setIndicator('');
    } else if (content === '.') {
      if (!value.includes('.')) {
        setValue(value + '.');
      }
    } else {
      if (value === '0') {
        setValue(content);
      } else {
        setValue(value + content);
      }
    }
  };

  return (
    <Layout>
      <Container>
        <Display>
          <Input type="text" value={value} disabled />
          <Indicator type="text" value={indicator} disabled />
        </Display>
        <Content>
          <Row>
            <Button onClick={() => handleButtonClick('*')}>×</Button>
            <Button onClick={() => handleButtonClick('/')}>÷</Button>
            <Button onClick={() => handleButtonClick('C')}>C</Button>
            <Button onClick={() => handleButtonClick('.')}>.</Button>
          </Row>
          <Row>
            <Button onClick={() => handleButtonClick('7')}>7</Button>
            <Button onClick={() => handleButtonClick('8')}>8</Button>
            <Button onClick={() => handleButtonClick('9')}>9</Button>
            <Button onClick={() => handleButtonClick('-')}>−</Button>
          </Row>
          <Row>
            <Button onClick={() => handleButtonClick('4')}>4</Button>
            <Button onClick={() => handleButtonClick('5')}>5</Button>
            <Button onClick={() => handleButtonClick('6')}>6</Button>
            <Button onClick={() => handleButtonClick('+')}>+</Button>
          </Row>
          <Row>
            <Button onClick={() => handleButtonClick('1')}>1</Button>
            <Button onClick={() => handleButtonClick('2')}>2</Button>
            <Button onClick={() => handleButtonClick('3')}>3</Button>
            <Button onClick={() => handleButtonClick('=')}>=</Button>
          </Row>
          <Row>
            <Button onClick={() => handleButtonClick('0')}>0</Button>
          </Row>
        </Content>
      </Container>
    </Layout>
  );
}

export default App;
