import { Link, useNavigate } from "react-router-dom"

import googleIcon from "@/assets/google-logo.svg"
import twitterBg from "@/assets/twitter-bg.png"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { footerLinks } from "@/constants/footerLinks"
import { SUCCESS_LOGIN_GOOGLE } from "@/constants/messages"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { Routes } from "@/constants/routes"
import { signUpWithGoogle } from "@/firebase"
import { useAppDispatch } from "@/hooks/redux"
import { Button } from "@/ui/Button/Button"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { getButtonVariant } from "@/utils/getButtonVariant"

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

export function Auth() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleSignUpClick = () => {
    navigate(Routes.SIGNUP)
  }
  const buttonVariant = getButtonVariant()

  const dispatchSuccessfull = () => {
    dispatchNotification(dispatch, NotificationStatuses.SUCCESS, SUCCESS_LOGIN_GOOGLE)
  }
  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle(navigate, dispatch, dispatchSuccessfull)
    } catch (e) {
      const error = e as Error
      dispatchNotification(dispatch, NotificationStatuses.ERROR, error.message)
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
            <Button
              onClick={handleGoogleSignUp}
              icon={googleIcon}
              outlined
              variant={buttonVariant}
            >
              Sign up with Google
            </Button>
            <Button onClick={handleSignUpClick} outlined variant={buttonVariant}>
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
