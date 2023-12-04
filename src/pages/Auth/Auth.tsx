import { Link, useNavigate } from "react-router-dom"
import { footerLinks } from "@/constants/footerLinks"
import {
  AuthInfo,
  Buttons,
  FooterLink,
  FooterLinks,
  MainContent,
  Paragraph,
  Span,
  Subtitle,
  TermsText,
  Text,
  Title,
  TwitterImage,
  Wrapper,
} from "./styled"
import twitterBg from "@/assets/twitter-bg.png"
import googleIcon from "@/assets/google-logo.svg"
import { Routes } from "@/constants/routes"
import { Button } from "@/ui/Button/Button"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { signUpWithGoogle } from "@/firebase"

export function Auth() {
  const navigate = useNavigate()
  const handleSignUpClick = () => {
    navigate(Routes.SIGNUP)
  }
  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle(navigate)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <Wrapper>
      <MainContent>
        <TwitterImage src={twitterBg} alt="twitter-background" />
        <AuthInfo>
          <TwitterLogo />
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today</Subtitle>
          <Buttons>
            <Button onClick={handleGoogleSignUp} icon={googleIcon} outlined width="400px">
              Sign up with Google
            </Button>
            <Button onClick={handleSignUpClick} outlined width="400px">
              Sign up with email
            </Button>
          </Buttons>
          <TermsText>
            By singing up you agree to the <Span>Terms of Service</Span> and
            <Span> Privacy Policy</Span>, including
            <Span> Cookie Use</Span>.
          </TermsText>
          <Text>
            <Paragraph>Already have an account?</Paragraph>
            <Span>
              <Link to={Routes.LOGIN}>Log in</Link>
            </Span>
          </Text>
        </AuthInfo>
      </MainContent>
      <FooterLinks>
        {footerLinks.map(({ id, text, to }) => (
          <FooterLink to={to || Routes.AUTH} key={id}>
            {text}
          </FooterLink>
        ))}
      </FooterLinks>
    </Wrapper>
  )
}
