<script>
  import {
    Page,
    Navbar,
    List,
    ListInput,
    ListItem,
    BlockTitle,
    Button,
    Block
  } from "framework7-svelte";
</script>

<Page name="newGame">
  <Navbar title="New Game" backLink="Back" />

  <BlockTitle strong>1. Name your new game</BlockTitle>
  <List noHairlinesMd>
    <ListInput label="Name" type="text" placeholder="My super awesome game" />
  </List>

  <BlockTitle>2. Choose your opponents</BlockTitle>
  <List>
    <ListItem checkbox name="my-checkbox" value="1" title="Friend 1" />
    <ListItem checkbox name="my-checkbox" value="2" title="Friend 2" />
    <ListItem checkbox name="my-checkbox" value="3" title="Friend 3" />
  </List>

  <Block>
    <Button class="col" large fill raised>Add new group</Button>
  </Block>
</Page>
