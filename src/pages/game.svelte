<Page name="game">
  <Navbar title={`${game.name}`} backLink="Back" />
  <List>
    {#each gameRounds as gameRound}
      <ListItem
        title={gameRound.question}
        link={`/game/${gameId}/${gameRound.id}`}
        badge={getBadge(gameRound)}
        badgeColor={getBadgeColor(gameRound)}
      />
    {/each}
  </List>
</Page>
<script>
  import { f7, Page, Navbar, List, ListItem } from 'framework7-svelte';
  
  export let f7route;

  const gameId = f7route.params.gameId;
  const game = f7route.context.game;
  let gameRounds = f7route.context.gameRounds;

  function getBadge(gameRound) {
    if (gameRound.closed) {
      return 'closed';
    }
    return 'open';
  }

  function getBadgeColor(gameRound) {
    if (gameRound.closed) {
      return 'red';
    }
    return 'green';
  }
</script>
