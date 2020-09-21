import Adapter from 'enzyme-adapter-react-16'
import {configure as configureEnzyme} from 'enzyme';
import createChaiEnzyme from 'chai-enzyme'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'
import chai from 'chai'
import dirtyChai from 'dirty-chai'
import createdChaiJestDiff from 'chai-jest-diff'
import sinonChai from'sinon-chai'

//chaine de reglage pour chai (test)
chai
  .use(dirtyChai)
  .use(createdChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)

expect.addSnapshotSerializer(enzymeToJSON)
configureEnzyme({adapter: new Adapter() })

