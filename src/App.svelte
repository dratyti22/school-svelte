<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import WhatIsRendering from './pages/WhatIsRendering.svelte';
  import RenderingStages from './pages/RenderingStages.svelte';
  import ProblemsAndSolutions from './pages/ProblemsAndSolutions.svelte';
  import PracticeAndTests from './pages/PracticeAndTests.svelte';
  import Conclusion from './pages/Conclusion.svelte';
  import Contact from './pages/Contact.svelte';
  import DefaultLayout from "./layouts/DefaultLayout.svelte";
</script>

<DefaultLayout>
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/what-is-rendering" component={WhatIsRendering}/>
    <Route path="/rendering-stages" component={RenderingStages}/>
    <Route path="/problems" component={ProblemsAndSolutions}/>
    <Route path="/practice" component={PracticeAndTests}/>
    <Route path="/conclusion" component={Conclusion}/>
    <Route path="/contact" component={Contact}/>
  </Router>
</DefaultLayout>
