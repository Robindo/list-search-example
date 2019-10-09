describe('Add new item with form ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

    it('add a new genre and remove it afterwards', () => {
        cy.get('a').should('have.class','button-add-new-item');
        cy.get('.button-add-new-item').click();
        cy.get('form').within(() => {
            //  Add new genre name
            cy.get('input')
            .should('have.class','input-title')
            .type('Dubstep')
            .should('have.value', 'Dubstep');

            //  Add new genre description (Dutch)
            cy.get('.textarea-nl')
            .type('Kenmerkend voor dubstep zijn de drums en bassen. Die vertonen veel overeenkomsten met reggae en verwante stijlen als reggaeton:'
            // + 'gebroken en onregelmatige drums en bassen op een vier- of achtkwartsmaat. '
            // + 'Net als bij reggae ligt vaak de nadruk op de oneven tellen, waarbij op de 3e tel iets meer nadruk ligt dan op de 1e tel.'
            // + 'Het gebruikelijke bpm van dubstep is 140. Het rimte kan echter twee keer zo traag lijken (70 bpm) vanwege de ontbrekende beats en de percussie.'
            // + 'Daarnaast wordt de muziek vooral ingevuld met elementen vanuit de dancemuziek: computers en synthesizers.'
            // + 'Dubstep kan ook rap bevatten, waardoor het gelijkenis met grime vertoond. ' 
            // + 'Het heeft ook verbintenis met drum and bass, maar dubstep is meestal trager,'
            // + 'zitten er minder drums en beats in en ligt het accent net iets anders (bij drum & bass ontbreekt juist de nadruk op de derde tel).'
            )
            .should('have.value', 'Kenmerkend voor dubstep zijn de drums en bassen. Die vertonen veel overeenkomsten met reggae en verwante stijlen als reggaeton:'
            // + 'gebroken en onregelmatige drums en bassen op een vier- of achtkwartsmaat. '
            // + 'Net als bij reggae ligt vaak de nadruk op de oneven tellen, waarbij op de 3e tel iets meer nadruk ligt dan op de 1e tel.'
            // + 'Het gebruikelijke bpm van dubstep is 140. Het rimte kan echter twee keer zo traag lijken (70 bpm) vanwege de ontbrekende beats en de percussie.'
            // + 'Daarnaast wordt de muziek vooral ingevuld met elementen vanuit de dancemuziek: computers en synthesizers.'
            // + 'Dubstep kan ook rap bevatten, waardoor het gelijkenis met grime vertoond. ' 
            // + 'Het heeft ook verbintenis met drum and bass, maar dubstep is meestal trager,'
            // + 'zitten er minder drums en beats in en ligt het accent net iets anders (bij drum & bass ontbreekt juist de nadruk op de derde tel).'
            );

            //  Add new genre description (English)
            cy.get('.textarea-en')
            .type('Dubstep is a genre of electronic dance music that originated in South London in the late 1990s. '
            // + 'It is generally characterised by sparse, syncopated rhythmic patterns with prominent sub-bass frequencies. '
            // + 'The style emerged as an offshoot of UK garage, drawing on a lineage of related styles such as 2-step and dub reggae, as well as jungle, broken beat, and grime. '
            // + 'In the United Kingdom, the origins of the genre can be traced back to the growth of the Jamaican sound system party scene in the early 1980s.'
            )
            .should('have.value', 'Dubstep is a genre of electronic dance music that originated in South London in the late 1990s. '
            // + 'It is generally characterised by sparse, syncopated rhythmic patterns with prominent sub-bass frequencies. '
            // + 'The style emerged as an offshoot of UK garage, drawing on a lineage of related styles such as 2-step and dub reggae, as well as jungle, broken beat, and grime. '
            // + 'In the United Kingdom, the origins of the genre can be traced back to the growth of the Jamaican sound system party scene in the early 1980s.'
            );
        });

        cy.get('button').should('have.class','button-submit');
        cy.get('.button-submit').click();

        cy.get('div').find('a').should('have.class','remove-item');
        cy.get('.remove-item').click();
    });

});
