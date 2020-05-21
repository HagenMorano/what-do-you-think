<Page name=GameRound>
  <Navbar title="{`${game.name}`} - rounds" backLink="Back" />

  {#if gameRound.uuidUserGamemaster === "123"}
  
    <BlockTitle>{gameRound.question}</BlockTitle>
    <Block>
      {#each gameRound.answers as answer}
      <Row class="align-items-stretch">
        <Col width="10">
          <Icon
            class="vertical-align-custom"
            ios="f7:minus_circle"
            aurora="f7:minus_circle"
            md="f7:minus_circle"
          />
        </Col>
        <Col width="80">
          <Card
            content={answer.content}
          />
        </Col>
        <Col width="10">
          <Icon
            class="vertical-align-custom"
            ios="f7:plus_circle"
            aurora="f7:plus_circle"
            md="f7:plus_circle"
          />
        </Col>
      </Row>
      {/each}
    </Block>
  {:else}
  <Messagebar>
    <span class="link icon-only" slot="inner-end" on:click={sendMessage}>
      <Icon
        ios="f7:arrow_up_circle_fill"
        aurora="f7:arrow_up_circle_fill"
        md="material:send"
      />
    </span>
  </Messagebar>
  {/if}
</Page>
<script>
  import { 
    f7, 
    Block,
    BlockTitle,
    Card,
    Col,
    Messagebar,
    Icon,
    Navbar,
    Page,
    Row
  } from 'framework7-svelte';
  
  export let f7route;

  console.log(f7route);
  const game = f7route.context.game;
  let gameRound = f7route.context.gameRound;

  function sendMessage() {

  }
</script>
