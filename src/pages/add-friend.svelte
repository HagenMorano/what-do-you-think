<Page name="addFriend">
  <Navbar title="Add new friend" backLink="Back"></Navbar>

  <BlockTitle>Add a friend</BlockTitle>
  <List noHairlinesMd>
    <ListInput
      label="Your friends name"
      type="text"
      placeholder="Name"
    ></ListInput>

    <ListInput
      label="Your friends ID"
      type="number"
      placeholder="12345"
    ></ListInput>
  </List>

  <Block>
    <Button class="col" large fill raised>Add new friend</Button>
  </Block>
</Page>
<script>
  import {
    Page,
    Navbar,
    List,
    ListInput,
    Block,
    BlockTitle,
    Button
  } from 'framework7-svelte';
</script>
