/* global describe */
/* global it */

let expect = require('chai').expect
import _ from 'lodash'

import constants from '../lib/constants'

describe('constants', () => {
  describe('#serverDateFormat', () => {
    it('should be correct', () => {
      expect(constants.serverDateFormat).to.equal('DD MM YYYY HH:mm:ss ZZ')
    })
  })

  describe('#shipTypes', () => {
    it('should be correct', () => {
      let shipTypes = {
        'Barge': 'barge',
        'Bleeder': 'bleeder',
        'Cargo Ship': 'cargo_ship',
        'Colony Ship': 'colony_ship',
        'Detonator': 'detonator',
        'Dory': 'dory',
        'Drone': 'drone',
        'Excavator': 'excavator',
        'Fighter': 'fighter',
        'Fissure Sealer': 'fissure_sealer',
        'Freighter': 'freighter',
        'Galleon': 'galleon',
        'Gas Giant Settlement Ship': 'gas_giant_settlement_ship',
        'Hulk': 'hulk',
        'Hulk Fast': 'hulk_fast',
        'Hulk Huge': 'hulk_huge',
        'Mining Platform Ship': 'mining_platform_ship',
        'Observatory Seeker': 'observatory_seeker',
        'Placebo': 'placebo',
        'Placebo II': 'placebo2',
        'Placebo III': 'placebo3',
        'Placebo IV': 'placebo4',
        'Placebo V': 'placebo5',
        'Placebo VI': 'placebo6',
        'Probe': 'probe',
        'Scanner': 'scanner',
        'Scow': 'scow',
        'Scow Fast': 'scow_fast',
        'Scow Large': 'scow_large',
        'Scow Mega': 'scow_mega',
        'Security Ministry Seeker': 'security_ministry_seeker',
        'Short Range Colony Ship': 'short_range_colony_ship',
        'Smuggler Ship': 'smuggler_ship',
        'Snark': 'snark',
        'Snark II': 'snark2',
        'Snark III': 'snark3',
        'Space Station Hull': 'space_station',
        'Spaceport Seeker': 'spaceport_seeker',
        'Spy Pod': 'spy_pod',
        'Spy Shuttle': 'spy_shuttle',
        'Stake': 'stake',
        'Supply Pod': 'supply_pod',
        'Supply Pod II': 'supply_pod2',
        'Supply Pod III': 'supply_pod3',
        'Supply Pod IV': 'supply_pod4',
        'Supply Pod V': 'supply_pod5',
        'Surveyor': 'surveyor',
        'Sweeper': 'sweeper',
        'Terraforming Platform Ship': 'terraforming_platform_ship',
        'Thud': 'thud'
      }

      expect(_.isEqual(constants.shipTypes, shipTypes)).to.equal(true)
    })
  })
})
