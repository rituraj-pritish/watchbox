import { BUTTON_TYPES, BUTTON_VARIANTS } from 'constants/buttons'
import React from 'react'
import FlexBox from '../FlexBox'
import Button from './index'

export default { title: 'Buttons' }

export const buttons = () => {
	return(
		<>
			<FlexBox m={2}>
				<Button m={1}>Primary</Button>
				<Button
					m={1}
					type={BUTTON_TYPES.OUTLINED}
				>Primary Outlined
				</Button>
			</FlexBox>

			<FlexBox m={2}>
				<Button
					variant={BUTTON_VARIANTS.SECONDARY}
					m={1}
				>Primary
				</Button>
				<Button
					m={1}
					variant={BUTTON_VARIANTS.SECONDARY}
					type={BUTTON_TYPES.OUTLINED}
				>Primary Outlined
				</Button>
			</FlexBox>

			<FlexBox m={2}>
				<Button
					variant={BUTTON_VARIANTS.DANGER}
					m={1}
				>Danger
				</Button>
				<Button
					m={1}
					variant={BUTTON_VARIANTS.DANGER}
					type={BUTTON_TYPES.OUTLINED}
				>DANGER Outlined
				</Button>
			</FlexBox>

			<FlexBox m={2}>
				<Button
					variant={BUTTON_VARIANTS.CANCEL}
					m={1}
				>Cancel
				</Button>
				<Button
					m={1}
					variant={BUTTON_VARIANTS.CANCEL}
					type={BUTTON_TYPES.OUTLINED}
				>Cancel Outlined
				</Button>
			</FlexBox>
		</>
	)
}