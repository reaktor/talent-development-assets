import React from 'react';
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  Select,
  Separator,
  Slider,
  Switch,
  Tabs,
  Text,
  Toggle,
  Tooltip
} from '../atoms';
import { Card, FormField } from '../molecules';
import { Form, Header } from '../organisms';

const DesignSystem: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [radioValue, setRadioValue] = React.useState('option1');
  const [selectValue, setSelectValue] = React.useState('');
  const [togglePressed, setTogglePressed] = React.useState(false);
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Design System</h1>
        
        <Tabs defaultValue="atoms">
          <Tabs.List>
            <Tabs.Trigger value="atoms">Atoms</Tabs.Trigger>
            <Tabs.Trigger value="molecules">Molecules</Tabs.Trigger>
            <Tabs.Trigger value="organisms">Organisms</Tabs.Trigger>
          </Tabs.List>

          {/* Atoms Tab */}
          <Tabs.Content value="atoms">
            <div className="space-y-12">
              {/* Avatar */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Avatar</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex gap-4 items-center">
                    <Avatar src="https://via.placeholder.com/150" alt="User" />
                    <Avatar src="https://via.placeholder.com/150" alt="User" size="lg" />
                    <Avatar fallback="KL" />
                    <Avatar fallback="MM" size="lg" />
                  </div>
                </div>
              </section>

              {/* Badge */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Badge</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Warning</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
              </section>

              {/* Button */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex gap-4 flex-wrap">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Delete</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>
              </section>

              {/* Checkbox */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkbox</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                    />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                </div>
              </section>

              {/* Input */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Input</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="space-y-4 max-w-md">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="name@example.com"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="disabled">Disabled</Label>
                      <Input id="disabled" disabled placeholder="Not editable" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Label */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Label</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Label>This is a label for a field</Label>
                </div>
              </section>

              {/* RadioGroup */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">RadioGroup</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <RadioGroup
                    name="demo-radio"
                    value={radioValue}
                    onChange={setRadioValue}
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' }
                    ]}
                  />
                </div>
              </section>

              {/* Select */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="max-w-md">
                    <Label htmlFor="select">Select an option</Label>
                    <Select
                      id="select"
                      value={selectValue}
                      onChange={(e) => setSelectValue(e.target.value)}
                      options={[
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                        { value: 'orange', label: 'Orange' },
                        { value: 'grape', label: 'Grape' }
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Separator */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Separator</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="space-y-4">
                    <p>Text before separator</p>
                    <Separator />
                    <p>Text after separator</p>
                    <div className="flex items-center gap-4">
                      <span>Horizontal</span>
                      <Separator orientation="vertical" className="h-6" />
                      <span>Separator</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Slider */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Slider</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="max-w-md space-y-4">
                    <Label>Value: {sliderValue[0]}</Label>
                    <Slider
                      value={sliderValue[0]}
                      onChange={(e) => setSliderValue([parseInt(e.target.value)])}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </section>

              {/* Switch */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Switch</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="airplane-mode"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
                    />
                    <Label htmlFor="airplane-mode">Airplane mode</Label>
                  </div>
                </div>
              </section>

              {/* Tabs */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tabs</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Tabs defaultValue="tab1">
                    <Tabs.List>
                      <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                      <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                      <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="tab1">
                      <p>Content for tab 1</p>
                    </Tabs.Content>
                    <Tabs.Content value="tab2">
                      <p>Content for tab 2</p>
                    </Tabs.Content>
                    <Tabs.Content value="tab3">
                      <p>Content for tab 3</p>
                    </Tabs.Content>
                  </Tabs>
                </div>
              </section>

              {/* Text */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Text</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                  <Text size="xs">Extra small text (xs)</Text>
                  <Text size="sm">Small text (sm)</Text>
                  <Text>Normal text (base)</Text>
                  <Text size="lg">Large text (lg)</Text>
                  <Text size="xl">Extra large text (xl)</Text>
                  <Text size="2xl">2xl size text</Text>
                  <Text variant="muted">Muted text</Text>
                  <Text variant="danger">Danger text</Text>
                  <Text weight="bold">Bold text</Text>
                </div>
              </section>

              {/* Toggle */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Toggle</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex gap-4">
                    <Toggle 
                      pressed={togglePressed}
                      onPressedChange={setTogglePressed}
                    >
                      {togglePressed ? 'On' : 'Off'}
                    </Toggle>
                    <Toggle variant="outline">Outline</Toggle>
                    <Toggle size="sm">Small</Toggle>
                    <Toggle size="lg">Large</Toggle>
                  </div>
                </div>
              </section>

              {/* Tooltip */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tooltip</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex gap-4">
                    <Tooltip content="This is a tooltip">
                      <Button variant="outline">Hover over me</Button>
                    </Tooltip>
                    <Tooltip content="Another tip" side="bottom">
                      <Button variant="secondary">Below</Button>
                    </Tooltip>
                    <Tooltip content="Third tip" side="right">
                      <Button>On the right</Button>
                    </Tooltip>
                  </div>
                </div>
              </section>
            </div>
          </Tabs.Content>

          {/* Molecules Tab */}
          <Tabs.Content value="molecules">
            <div className="space-y-12">
              {/* Card */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Card</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <h3 className="text-xl font-semibold mb-2">Basic Card</h3>
                      <p className="text-gray-600 mb-4">
                        This is a basic card component that can contain any content.
                      </p>
                      <Button size="sm">Action</Button>
                    </Card>
                    
                    <Card className="border-2 border-blue-500">
                      <h3 className="text-xl font-semibold mb-2">Custom Border Card</h3>
                      <p className="text-gray-600 mb-4">
                        Cards can be customized with different styles and borders.
                      </p>
                      <div className="flex gap-2">
                        <Badge>New</Badge>
                        <Badge variant="secondary">Featured</Badge>
                      </div>
                    </Card>
                  </div>
                </div>
              </section>

              {/* FormField */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">FormField</h2>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="max-w-md space-y-4">
                    <FormField
                      label="Username"
                      type="text"
                      placeholder="Enter username"
                      required
                    />
                    
                    <FormField
                      label="Email Address"
                      type="email"
                      placeholder="user@example.com"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                    />
                    
                    <FormField
                      label="Password"
                      type="password"
                      placeholder="Enter password"
                      error="Password must be at least 8 characters"
                    />
                    
                    <FormField
                      label="Disabled Field"
                      type="text"
                      placeholder="Cannot edit"
                      disabled
                    />
                  </div>
                </div>
              </section>
            </div>
          </Tabs.Content>

          {/* Organisms Tab */}
          <Tabs.Content value="organisms">
            <div className="space-y-12">
              {/* Header */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Header</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Header />
                </div>
              </section>

              {/* Form */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Form</h2>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form 
                      title="Contact Form"
                      onSubmit={handleFormSubmit}
                      submitText="Send Message"
                    >
                      <FormField
                        label="Full Name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        placeholder="John Doe"
                        required
                      />
                      <FormField
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        placeholder="john@example.com"
                        required
                      />
                      <FormField
                        label="Message"
                        type="text"
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        placeholder="Your message here..."
                      />
                    </Form>

                    <Form 
                      title="Login Form"
                      onSubmit={handleFormSubmit}
                      submitText="Sign In"
                      cancelText="Back"
                      onCancel={() => console.log('Cancel clicked')}
                    >
                      <FormField
                        label="Email"
                        type="email"
                        placeholder="user@example.com"
                        required
                      />
                      <FormField
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                      </div>
                    </Form>
                  </div>
                </div>
              </section>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
};

export default DesignSystem;