<template>
  <section class="step-one">
    <form class="container">
      <section>
        <fieldset>
          <legend>
            Como está sendo sua satisfação com o ambiente de trabalho?
          </legend>
          <div class="step-one__feeling-group">
            <div class="form-check radio-feeling">
              <span>&#128545;</span>
              <input name="sentimento" type="radio" class="form-check-input" id="ruim" />
              <label class="form-check-label" for="ruim">Ruim</label>
            </div>
            <div class="form-check radio-feeling">
              <span>&#128530;</span>
              <input name="sentimento" type="radio" class="form-check-input" id="nao-boa" />
              <label class="form-check-label" for="nao-boa">Não tão boa</label>
            </div>
            <div class="form-check radio-feeling">
              <span>&#128528;</span>
              <input name="sentimento" type="radio" class="form-check-input" id="normal" />
              <label class="form-check-label" for="normal">Normal</label>
            </div>
            <div class="form-check radio-feeling">
              <span>&#128512;</span>
              <input name="sentimento" type="radio" class="form-check-input" id="boa" />
              <label class="form-check-label" for="boa">Boa</label>
            </div>
            <div class="form-check radio-feeling">
              <span>&#128513;</span>
              <input name="sentimento" type="radio" class="form-check-input" id="incrivel" />
              <label class="form-check-label" for="incrivel">Incrível</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Em que medida você sente que tem as mesmas oportunidades de
            crescimento e desenvolvimento que seus colegas?
          </legend>
          <div class="form-check">
            <label for="totalmente" class="form-label">Totalmente</label>
            <input class="form-check-input" type="radio" id="totalmente" name="crescimento" />
          </div>
          <div class="form-check">
            <label for="grande-parte" class="form-label">Em grande parte</label>
            <input class="form-check-input" type="radio" id="grande-parte" name="crescimento"/>
          </div>
          <div class="form-check">
            <label for="moderadamente" class="form-label">Moderadamente</label>
            <input class="form-check-input" type="radio" id="moderadamente" name="crescimento"/>
          </div>
          <div class="form-check">
            <label for="pequena-parte" class="form-label"
              >Em pequena parte</label
            >
            <input class="form-check-input" type="radio" id="pequena-parte" name="crescimento"/>
          </div>
          <div class="form-check">
            <label for="nada" class="form-label">Nada</label>
            <input class="form-check-input" type="radio" id="nada" name="crescimento"/>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Como você descreveria o ambiente de trabalho em termos de inclusão e
            diversidade?
          </legend>
          <div class="form-check">
            <label for="muito-inclusivo" class="form-label"
              >Muito inclusivo</label
            >
            <input class="form-check-input" name="ambiente" type="radio" id="muito-inclusivo" />
          </div>
          <div class="form-check">
            <label for="moderadamente-inclusivo" class="form-label"
              >Moderadamente inclusivo</label
            >
            <input
              class="form-check-input"
              type="radio"
              name="ambiente"
              id="moderadamente-inclusivo"
            />
          </div>
          <div class="form-check">
            <label for="neutro" class="form-label">Neutro</label>
            <input class="form-check-input" type="radio" id="neutro" name="ambiente" />
          </div>
          <div class="form-check">
            <label for="pouco-inclusivo" class="form-label"
              >Pouco inclusivo</label
            >
            <input class="form-check-input" type="radio" id="pouco-inclusivo" name="ambiente" />
          </div>
          <div class="form-check">
            <label for="nada" class="form-label">Nada inclusivo</label>
            <input class="form-check-input" type="radio" id="nada" />
          </div>
        </fieldset>
        <label class="form-label" for="sugestao">
          O que você gostaria que fosse melhor?
        </label>
        <textarea
          class="form-control"
          cols="4"
          rows="4"
          placeholder="Informe suas sugestões"
        ></textarea>
      </section>
      <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "StepOne",
  components: {},
};
</script>

<style lang="scss">
@import "../../styles/pages/step-one";
</style>
