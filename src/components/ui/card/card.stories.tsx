import type { Meta, StoryObj } from '@storybook/react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '~components/ui/card';
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email" className="mb-2">
            E-mail
          </Label>
          <Input
            placeholder="Ex: joao@empresa.com"
            className="mb-4"
            id="email"
          />

          <Label htmlFor="password" className="mb-2">
            Password
          </Label>
          <Input placeholder="*******" id="password" />
        </CardContent>
        <CardFooter>
          <Button type="button" variant="default">
            login
          </Button>
        </CardFooter>
      </>
    ),
  },
};
