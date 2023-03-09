import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentWrapper from './content-wrapper';

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "test" }
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

describe('ContentWrapper', () => {
  beforeEach(() => {
    render(
      <ContentWrapper>
        <p>test</p>
      </ContentWrapper>
    )
  });

  test('Should render children element', () => {
    const testElement = screen.getByText('test');
    expect(testElement).toBeInTheDocument();
  });

  test('Should render navbar', () => {
    const avatarElement = screen.getByRole('img');
    expect(avatarElement).toBeInTheDocument();
  });

  //TODO: Update mock to handle no session scenario
});
