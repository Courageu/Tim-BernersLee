      function afficherHeure() {
        const maintenant = new Date();
        const heure = maintenant.getHours();
        const minutes = maintenant.getMinutes();
        const secondes = maintenant.getSeconds();
        const heureEnTexte = `${heure.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
        document.getElementById('heure').textContent = heureEnTexte;
      }

      // Mettre à jour l'heure toutes les secondes
      setInterval(afficherHeure, 1000);
