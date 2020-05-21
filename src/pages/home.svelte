<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>What do you think</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>WDYT</NavTitleLarge>
  </Navbar>

  <!-- Page content -->
  <Block>
    <h1>{`Hi ${user.username}`}</h1>
  </Block>

  <BlockTitle>My friends</BlockTitle>
  <List>
    {#each friends as friend}
      <ListItem>{ friend.username }</ListItem>
    {/each}
    <ListItem link="/form/" title="Search for friends"/>
  </List>

  <BlockTitle>My games</BlockTitle>
  <List>
    {#each games as game}
      <ListItem 
        link="{`/game/${game.id}`}" 
        title="{ game.name }" />
    {/each}
    <ListItem link="/new-game/" title="Create new game"/>
  </List>

  <Block strong>
    <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

    <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
  </Block>

  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem link="/about/" title="About"/>
    <ListItem link="/form/" title="Form"/>
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised popupOpen="#my-popup">Popup</Button>
      </Col>
      <Col width="50">
        <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Col>
    </Row>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised panelOpen="left">Left Panel</Button>
      </Col>
      <Col width="50">
        <Button fill raised panelOpen="right">Right Panel</Button>
      </Col>
    </Row>
  </Block>

  <List>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List>
</Page>
<script>
  import {
    f7,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';


  export let f7route;

  const user = f7route.context.user;
  let friends = [];
  let games = [];
  f7.request.get("/static/mock/users.json", data => {
    friends = JSON.parse(data);
  });
  f7.request.get("/static/mock/games.json", data => {
    games = JSON.parse(data);
  });
</script>