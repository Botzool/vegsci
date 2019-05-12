import React from 'react'
import {Consumer} from '../layouts/Context'
import Theses from '../components/theses/Theses'
import {thesesEn, thesesCz} from '../content/theses'

const ThesesPage = () => (
      <Consumer>
        {({int}) => (
            <Theses
              thesesData={int === "en" ? thesesEn : thesesCz}
            />
        )}
      </Consumer>
)

ThesesPage.propTypes = {}

export default ThesesPage
