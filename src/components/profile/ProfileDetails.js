import React from 'react'
import { Link } from 'react-router-dom'
import { Translate } from 'react-localize-redux'

import { Popup, Grid, Image } from 'semantic-ui-react'
import { wallet } from '../../utils/wallet'
import MainImage from '../common/MainImage'
import Balance from '../common/Balance'
import InfoPopup from '../common/InfoPopup'
import AccountGreyImage from '../../images/icon-account-grey.svg'
import LockImage from '../../images/icon-lock.svg'

import styled from 'styled-components'

const CustomGrid = styled(Grid)`
    &&& {
        .row {
            padding-top: 12px;
            padding-bottom: 12px;
            align-items: center;
            min-height: 58px;

            .edit-link {
                font-weight: 600;
            }
            .title {
                font-weight: 600;
                color: #24272a;
                display: flex;
                align-items: center;
            }
        }

        .locked {
            float: right;
            border: 0px;
            padding: 1px 7px;
            width: 32px;
            height: 32px;
            background: #f8f8f8;
            border-radius: 32px;

            img {
                padding-top: 4px;
            }
        }

        .row-title {
            margin-top: 20px;
        }

        @media screen and (max-width: 991px) {
        }
        @media screen and (max-width: 767px) {
            margin-left: 0px;
            margin-right: 0px;

            .column {
                padding-left: 0px;
                padding-right: 0px;
            }
        }
    }
`

const ProfileDetails = ({ account }) => (
    <CustomGrid>
        <Grid.Row>
            <Grid.Column
                computer='10'
                tablet='10'
                mobile='16'
                as='h6'
                className='color-charcoal-grey'
            >
                <Translate id='profile.details.profile' />
            </Grid.Column>
            <Grid.Column computer='4' as='h6' textAlign='center' only='tablet' className='color-charcoal-grey'>
                <Translate id='profile.details.visibleTo' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row className='border-top'>
            <Grid.Column computer='4' tablet='4' mobile='7' className='title'>
                <Translate id='profile.details.username' />
            </Grid.Column>
            <Grid.Column computer='6' tablet='6' mobile='4'>
                @{account.accountId}
            </Grid.Column>
            <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                <Translate id='profile.details.public' />
            </Grid.Column>
            <Grid.Column computer='2' tablet='2' mobile='5' textAlign='right'>
                <Popup
                    trigger={
                        <div className='locked'>
                            <Image src={LockImage} align='left' />
                        </div>
                    }
                    hoverable
                    position='left center'
                >
                    <Popup.Header><Translate id='profile.details.lockPopup.title' /></Popup.Header>
                    <Popup.Content>
                        <Translate id='profile.details.lockPopup.text' data={{'link': <Link to="/create"><Translate id='profile.details.lockPopup.createAnotherAccount' /></Link>}} />
                        {` `}
                        {false ?
                            <a href='/'>Learn more</a>
                            : null}
                    </Popup.Content>
                </Popup>
            </Grid.Column>
        </Grid.Row>
        {false ? <div>
            <Grid.Row className='border-top'>
                <Grid.Column computer='3' tablet='3' mobile='4' className='title'>
                    Full Name
            </Grid.Column>
                <Grid.Column computer='7' tablet='7' mobile='9'>
                    Evgeny Kuzyakov
            </Grid.Column>
                <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                    Friends
            </Grid.Column>
                <Grid.Column
                    as={Link}
                    to='/'
                    computer='2'
                    tablet='2'
                    mobile='3'
                    textAlign='right'
                    className='edit-link'
                >
                    Edit
            </Grid.Column>
            </Grid.Row>
            <Grid.Row className='border-top'>
                <Grid.Column computer='3' tablet='3' mobile='4' className='title'>
                    Photo
            </Grid.Column>
                <Grid.Column computer='7' tablet='7' mobile='9'>
                    <MainImage
                        src={AccountGreyImage}
                        size='huge'
                    />
                </Grid.Column>
                <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                    Public
            </Grid.Column>
                <Grid.Column
                    as={Link}
                    to='/'
                    computer='2'
                    tablet='2'
                    mobile='3'
                    textAlign='right'
                    className='edit-link'
                >
                    Edit
            </Grid.Column>
            </Grid.Row>

            <Grid.Row className='border-top-bold row-title'>
                <Grid.Column
                    computer='10'
                    tablet='10'
                    mobile='16'
                    as='h6'
                    className='color-charcoal-grey'
                >
                    CONTACT INFORMATION
            </Grid.Column>
                <Grid.Column
                    computer='4'
                    tablet='4'
                    as='h6'
                    textAlign='center'
                    only='tablet'
                >
                    VISIBLE TO
            </Grid.Column>
            </Grid.Row>
            <Grid.Row className='border-top'>
                <Grid.Column computer='3' tablet='3' mobile='4' className='title'>
                    Email
            </Grid.Column>
                <Grid.Column computer='7' tablet='7' mobile='9'>
                    email@website.com
            </Grid.Column>
                <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                    Public
            </Grid.Column>
                <Grid.Column
                    as={Link}
                    to='/'
                    computer='2'
                    tablet='2'
                    mobile='3'
                    textAlign='right'
                    className='edit-link'
                >
                    Edit
            </Grid.Column>
            </Grid.Row>
            <Grid.Row className='border-top'>
                <Grid.Column computer='3' tablet='3' mobile='4' className='title'>
                    Phone
            </Grid.Column>
                <Grid.Column computer='7' tablet='7' mobile='9'>
                    000-000-0000
            </Grid.Column>
                <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                    Friends
            </Grid.Column>
                <Grid.Column
                    as={Link}
                    to='/'
                    computer='2'
                    tablet='2'
                    mobile='3'
                    textAlign='right'
                    className='edit-link'
                >
                    Edit
            </Grid.Column>
            </Grid.Row>
            <Grid.Row className='border-top'>
                <Grid.Column computer='3' tablet='3' mobile='4' className='title'>
                    Address
            </Grid.Column>
                <Grid.Column computer='7' tablet='7' mobile='9'>
                    1234 N. West Ave., San Francisco, CA 98562
            </Grid.Column>
                <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                    Friends
            </Grid.Column>
                <Grid.Column
                    as={Link}
                    to='/'
                    computer='2'
                    tablet='2'
                    mobile='3'
                    textAlign='right'
                    className='edit-link'
                >
                    Edit
            </Grid.Column>
            </Grid.Row>

            <Grid.Row className='border-top-bold row-title'>
                <Grid.Column
                    computer='10'
                    tablet='10'
                    mobile='16'
                    as='h6'
                    className='color-charcoal-grey'
                >
                    FINANCIAL INFORMATION
            </Grid.Column>
                <Grid.Column
                    computer='4'
                    tablet='4'
                    as='h6'
                    textAlign='center'
                    only='tablet'
                >
                    VISIBLE TO
            </Grid.Column>
            </Grid.Row>
        </div> : null}

        <Grid.Row className='border-top'>
            <Grid.Column computer='4' tablet='4' mobile='7' className='title'>
                <Translate id='profile.details.totalBalance'/>
            </Grid.Column>
            <Grid.Column computer='6' tablet='6' mobile='4'>
                <Balance amount={wallet.getAccountBalance()}/>
            </Grid.Column>
            <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                <Translate id='profile.details.public' />
            </Grid.Column>
            <Grid.Column as="div">
            </Grid.Column>
        </Grid.Row>

        <Grid.Row className='border-top'>
            <Grid.Column computer='4' tablet='4' mobile='7' className='title'>
                <Translate id='profile.details.minBalance'/>
                <InfoPopup content={<Translate id='minimumBalance'/>}/>
            </Grid.Column>
            <Grid.Column computer='6' tablet='6' mobile='4'>
                <Balance  amount={wallet.getAccountBalance('minimum')}/> 
            </Grid.Column>
            <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                <Translate id='profile.details.public' />
            </Grid.Column>
            <Grid.Column as="div">
            </Grid.Column>
        </Grid.Row>

        <Grid.Row className='border-top'>
            <Grid.Column computer='4' tablet='4' mobile='7' className='title'>
                <Translate id='profile.details.staked'/>
            </Grid.Column>
            <Grid.Column computer='6' tablet='6' mobile='4'>
                <Balance  amount={wallet.getAccountBalance('staked')}/>
            </Grid.Column>
            <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                <Translate id='profile.details.public' />
            </Grid.Column>
            <Grid.Column as="div">
            </Grid.Column>
        </Grid.Row>

        <Grid.Row className='border-top'>
            <Grid.Column computer='4' tablet='4' mobile='7' className='title'>
                <Translate id='profile.details.availableBalance'/>
                <InfoPopup content={<Translate id='availableBalanceProfile'/>}/>
            </Grid.Column>
            <Grid.Column computer='6' tablet='6' mobile='4'>
                <Balance  amount={wallet.getAccountBalance('available')}/>
            </Grid.Column>
            <Grid.Column computer='4' tablet='4' textAlign='center' only='tablet'>
                <Translate id='profile.details.public' />
            </Grid.Column>
            <Grid.Column as="div">
            </Grid.Column>
        </Grid.Row>

    </CustomGrid>
)

export default ProfileDetails
