import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal/lib/components/Modal'
import { useRouter } from 'next/router'
import TransferModal from './modal/TransferModal'



Modal.setAppElement('#__next')

const Header = ({ walletAddress, sanityTokens, thirdWebTokens, connectWallet }) => {
    const router = useRouter()

    const customStyles={
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#0a0b0d',
            padding: 0,
            border: 'none',
        },
        overlay: {
            backgroundColor: 'right(10, 11, 13, 0.75)',
        },
    }

  return (
    <Wrapper>
        <Title>Assets</Title>
        <ButtonsContainer>
            <WalletLink>
                <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                <WalletAddress>{walletAddress.slice(0, 7)}...{walletAddress.slice(35)}</WalletAddress>
            </WalletLink>
            <Wrapper>
                <Button style={{ backgroundColor: '#3773f5', color: 'black'}}>
                    Buy/Sell
                </Button>
                <a href={"/?transfer=1"}>
                    <Button style={{ backgroundColor: 'black', color: '#3773f5'}}>
                        Send/Receive
                    </Button>
                </a>
            </Wrapper>
        </ButtonsContainer>
        <Modal style={customStyles} isOpen = {!!router.query.transfer}
        onCloseRequest = {() => router.push('/')}>
            <TransferModal sanityTokens={sanityTokens} walletAddress={walletAddress} thirdWebTokens={thirdWebTokens}  />
        </Modal>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    width: calc(100% - 3rem);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #282b2f;
    display: flex;
    align-items: center;
`
const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    flex: 1;
`
const ButtonsContainer = styled.div`
    display: flex;
`
const Button = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0.8rem;
    border: 1px solid #282b2f;
    border-radius: 0.4rem;
    margin-right: 1rem;

    &:hover {
        cursor: pointer;
    }
`
const WalletLink = styled.div`
    font-size: 1.3rem;
    border: 1px solid #282b2f;
    border-radius: 5rem;
    margin-top: 1.1rem;
    margin-right: 1rem;
    padding: 1rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const WalletLinkTitle = styled.div`
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    color: #27ad75;
    font-weight: 600;
`
const WalletAddress = styled.div`
    font-size: 0.8rem;
`

