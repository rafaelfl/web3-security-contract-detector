import { DetectorScheduler } from './plugins/scheduler/DetectorScheduler';
import { SimplePluginPolicy } from './plugins/scheduler/policies/SimplePluginPolicy';
import { SlitherPlugin } from './plugins/slither/SlitherPlugin';

const main = async () => {
  const slitherPlugin = new SlitherPlugin();

  const pluginsList = [slitherPlugin];

  const detectorScheduler = new DetectorScheduler(new SimplePluginPolicy(pluginsList));

  const result = await detectorScheduler.execute('./contracts/killbilly.sol');

  for (const res of result) {
    console.log(` ---------------------------------------`);
    console.log(` ::::: detector: ${res.detectorName}`);
    console.log(` ::::: result: ${res.json}`);
    console.log(` ---------------------------------------`);
  }
};

main();
