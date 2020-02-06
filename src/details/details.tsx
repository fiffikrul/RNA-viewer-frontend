import React from 'react';
import LiteMolPlugin from '../litemolPlugin/litemolPlugin';

const globalDetailsExample = [`data_1ATV
# 
_entry.id   1ATV 
# 
_audit_conform.dict_name       mmcif_pdbx.dic 
_audit_conform.dict_version    5.279 
_audit_conform.dict_location   http://mmcif.pdb.org/dictionaries/ascii/mmcif_pdbx.dic 
# 
loop_
_database_2.database_id 
_database_2.database_code 
PDB   1ATV         
WWPDB D_1000171251 
# 
_pdbx_database_related.db_name        PDB 
_pdbx_database_related.db_id          1ATW 
_pdbx_database_related.details        'ENSEMBLE OF 3 STRUCTURES' 
_pdbx_database_related.content_type   unspecified 
# 
_pdbx_database_status.status_code                     REL 
_pdbx_database_status.entry_id                        1ATV 
_pdbx_database_status.recvd_initial_deposition_date   1997-08-14 
_pdbx_database_status.deposit_site                    ? 
_pdbx_database_status.process_site                    ? 
_pdbx_database_status.status_code_sf                  ? 
_pdbx_database_status.status_code_mr                  REL 
_pdbx_database_status.SG_entry                        ? 
_pdbx_database_status.pdb_format_compatible           Y 
_pdbx_database_status.status_code_cs                  ? 
_pdbx_database_status.methods_development_category    ? 
# 
_audit_author.name           'Kang, H.' 
_audit_author.pdbx_ordinal   1 
# 
_citation.id                        primary 
_citation.title                     
'Primary Sequence at the Junction of Stem and Loop in RNA Hairpins Affects the Three-Dimensional Conformation in Solution' 
_citation.journal_abbrev            'To be Published' 
_citation.journal_volume            ? 
_citation.page_first                ? 
_citation.page_last                 ? 
_citation.year                      ? 
_citation.journal_id_ASTM           ? 
_citation.country                   ? 
_citation.journal_id_ISSN           ? 
_citation.journal_id_CSD            0353 
_citation.book_publisher            ? 
_citation.pdbx_database_id_PubMed   ? 
_citation.pdbx_database_id_DOI      ? 
# 
_citation_author.citation_id   primary 
_citation_author.name          'Kang, H.' 
_citation_author.ordinal       1 
# 
_cell.entry_id           1ATV 
_cell.length_a           1.000 
_cell.length_b           1.000 
_cell.length_c           1.000 
_cell.angle_alpha        90.00 
_cell.angle_beta         90.00 
_cell.angle_gamma        90.00 
_cell.Z_PDB              1 
_cell.pdbx_unique_axis   ? 
# 
_symmetry.entry_id                         1ATV 
_symmetry.space_group_name_H-M             'P 1' 
_symmetry.pdbx_full_space_group_name_H-M   ? 
_symmetry.cell_setting                     ? 
_symmetry.Int_Tables_number                1 
# 
_entity.id                         1 
_entity.type                       polymer 
_entity.src_method                 syn 
_entity.pdbx_description           
;RNA (5'-R(*GP*GP*GP*AP*CP*CP*AP*GP*AP*AP*GP*GP*UP*CP*CP*CP*G)-3')
;
_entity.formula_weight             5520.380 
_entity.pdbx_number_of_molecules   1 
_entity.pdbx_ec                    ? 
_entity.pdbx_mutation              ? 
_entity.pdbx_fragment              ? 
_entity.details                    ? 
# 
_entity_poly.entity_id                      1 
_entity_poly.type                           polyribonucleotide 
_entity_poly.nstd_linkage                   no 
_entity_poly.nstd_monomer                   no 
_entity_poly.pdbx_seq_one_letter_code       GGGACCAGAAGGUCCCG 
_entity_poly.pdbx_seq_one_letter_code_can   GGGACCAGAAGGUCCCG 
_entity_poly.pdbx_strand_id                 A 
_entity_poly.pdbx_target_identifier         ? 
# 
loop_
_entity_poly_seq.entity_id 
_entity_poly_seq.num 
_entity_poly_seq.mon_id 
_entity_poly_seq.hetero 
1 1  G n 
1 2  G n 
1 3  G n 
1 4  A n 
1 5  C n 
1 6  C n 
1 7  A n 
1 8  G n 
1 9  A n 
1 10 A n 
1 11 G n 
1 12 G n 
1 13 U n 
1 14 C n 
1 15 C n 
1 16 C n 
1 17 G n 
# 
_struct_ref.id                         1 
_struct_ref.entity_id                  1 
_struct_ref.db_name                    PDB 
_struct_ref.db_code                    1ATV 
_struct_ref.pdbx_db_accession          1ATV 
_struct_ref.pdbx_db_isoform            ? 
_struct_ref.pdbx_seq_one_letter_code   ? 
_struct_ref.pdbx_align_begin           ? 
# 
_struct_ref_seq.align_id                      1 
_struct_ref_seq.ref_id                        1 
_struct_ref_seq.pdbx_PDB_id_code              1ATV 
_struct_ref_seq.pdbx_strand_id                A 
_struct_ref_seq.seq_align_beg                 1 
_struct_ref_seq.pdbx_seq_align_beg_ins_code   ? 
_struct_ref_seq.seq_align_end                 17 
_struct_ref_seq.pdbx_seq_align_end_ins_code   ? 
_struct_ref_seq.pdbx_db_accession             1ATV 
_struct_ref_seq.db_align_beg                  1 
_struct_ref_seq.pdbx_db_align_beg_ins_code    ? 
_struct_ref_seq.db_align_end                  17 
_struct_ref_seq.pdbx_db_align_end_ins_code    ? 
_struct_ref_seq.pdbx_auth_seq_align_beg       1 
_struct_ref_seq.pdbx_auth_seq_align_end       17 
# 
loop_
_chem_comp.id 
_chem_comp.type 
_chem_comp.mon_nstd_flag 
_chem_comp.name 
_chem_comp.pdbx_synonyms 
_chem_comp.formula 
_chem_comp.formula_weight 
A 'RNA linking' y "ADENOSINE-5'-MONOPHOSPHATE" ? 'C10 H14 N5 O7 P' 347.221 
C 'RNA linking' y "CYTIDINE-5'-MONOPHOSPHATE"  ? 'C9 H14 N3 O8 P'  323.197 
G 'RNA linking' y "GUANOSINE-5'-MONOPHOSPHATE" ? 'C10 H14 N5 O8 P' 363.221 
U 'RNA linking' y "URIDINE-5'-MONOPHOSPHATE"   ? 'C9 H13 N2 O9 P'  324.181 
# 
loop_
_pdbx_nmr_exptl.experiment_id 
_pdbx_nmr_exptl.conditions_id 
_pdbx_nmr_exptl.type 
_pdbx_nmr_exptl.solution_id 
1 1 NOESY 1 
2 1 COSY  1 
3 1 TOCSY 1 
# 
_pdbx_nmr_exptl_sample_conditions.conditions_id       1 
_pdbx_nmr_exptl_sample_conditions.temperature         298 
_pdbx_nmr_exptl_sample_conditions.pressure            '1 ATM SOLVENT SYSTEM : D2O' 
_pdbx_nmr_exptl_sample_conditions.pH                  6.2 
_pdbx_nmr_exptl_sample_conditions.ionic_strength      '50 mM NACL' 
_pdbx_nmr_exptl_sample_conditions.pressure_units      . 
_pdbx_nmr_exptl_sample_conditions.temperature_units   K 
# 
loop_
_pdbx_nmr_spectrometer.spectrometer_id 
_pdbx_nmr_spectrometer.model 
_pdbx_nmr_spectrometer.manufacturer 
_pdbx_nmr_spectrometer.field_strength 
1 -500             GE     500 
2 'BRUKER AMX-600' Bruker 600 
# 
_pdbx_nmr_refine.entry_id           1ATV 
_pdbx_nmr_refine.method             'molecular dynamics' 
_pdbx_nmr_refine.details            'DETAILS CAN BE FOUND IN THE CITATION, NAR, ABOVE.' 
_pdbx_nmr_refine.software_ordinal   1 
# 
_pdbx_nmr_ensemble.entry_id                             1ATV 
_pdbx_nmr_ensemble.conformers_calculated_total_number   12 
_pdbx_nmr_ensemble.conformers_submitted_total_number    4 
_pdbx_nmr_ensemble.conformer_selection_criteria         'LEAST RESTRAINT VIOLATION' 
# 
loop_
_pdbx_nmr_software.classification 
_pdbx_nmr_software.name 
_pdbx_nmr_software.version 
_pdbx_nmr_software.authors 
_pdbx_nmr_software.ordinal 
refinement           X-PLOR ? BRUNGER 1 
'structure solution' X-PLOR ? ?       2 
# 
_exptl.entry_id          1ATV 
_exptl.method            'SOLUTION NMR' 
_exptl.crystals_number   ? 
# 
_struct.entry_id                  1ATV 
_struct.title                     'HAIRPIN WITH AGAA TETRALOOP, NMR, 4 STRUCTURES' 
_struct.pdbx_descriptor           "5'-R(*GP*GP*GP*AP*CP*CP*AP*GP*AP*AP*GP*GP*UP*CP*CP*CP*G)-3'" 
_struct.pdbx_model_details        ? 
_struct.pdbx_CASP_flag            ? 
_struct.pdbx_model_type_details   ? 
# 
_struct_keywords.entry_id        1ATV 
_struct_keywords.pdbx_keywords   RNA 
_struct_keywords.text            'RIBONUCLEIC ACID, RNA, HAIRPIN' 
# 
_struct_asym.id                            A 
_struct_asym.pdbx_blank_PDB_chainid_flag   N 
_struct_asym.pdbx_modified                 N 
_struct_asym.entity_id                     1 
_struct_asym.details                       ? 
# 
_struct_biol.id   1 
# 
loop_
_struct_conn.id 
_struct_conn.conn_type_id 
_struct_conn.pdbx_leaving_atom_flag 
_struct_conn.pdbx_PDB_id 
_struct_conn.ptnr1_label_asym_id 
_struct_conn.ptnr1_label_comp_id 
_struct_conn.ptnr1_label_seq_id 
_struct_conn.ptnr1_label_atom_id 
_struct_conn.pdbx_ptnr1_label_alt_id 
_struct_conn.pdbx_ptnr1_PDB_ins_code 
_struct_conn.pdbx_ptnr1_standard_comp_id 
_struct_conn.ptnr1_symmetry 
_struct_conn.ptnr2_label_asym_id 
_struct_conn.ptnr2_label_comp_id 
_struct_conn.ptnr2_label_seq_id 
_struct_conn.ptnr2_label_atom_id 
_struct_conn.pdbx_ptnr2_label_alt_id 
_struct_conn.pdbx_ptnr2_PDB_ins_code 
_struct_conn.ptnr1_auth_asym_id 
_struct_conn.ptnr1_auth_comp_id 
_struct_conn.ptnr1_auth_seq_id 
_struct_conn.ptnr2_auth_asym_id 
_struct_conn.ptnr2_auth_comp_id 
_struct_conn.ptnr2_auth_seq_id 
_struct_conn.ptnr2_symmetry 
_struct_conn.pdbx_ptnr3_label_atom_id 
_struct_conn.pdbx_ptnr3_label_seq_id 
_struct_conn.pdbx_ptnr3_label_comp_id 
_struct_conn.pdbx_ptnr3_label_asym_id 
_struct_conn.pdbx_ptnr3_label_alt_id 
_struct_conn.pdbx_ptnr3_PDB_ins_code 
_struct_conn.details 
_struct_conn.pdbx_dist_value 
_struct_conn.pdbx_value_order 
hydrog1  hydrog ? ? A G 1 N1 ? ? ? 1_555 A C 16 N3 ? ? A G 1 A C 16 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog2  hydrog ? ? A G 1 N2 ? ? ? 1_555 A C 16 O2 ? ? A G 1 A C 16 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog3  hydrog ? ? A G 1 O6 ? ? ? 1_555 A C 16 N4 ? ? A G 1 A C 16 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog4  hydrog ? ? A G 2 N1 ? ? ? 1_555 A C 15 N3 ? ? A G 2 A C 15 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog5  hydrog ? ? A G 2 N2 ? ? ? 1_555 A C 15 O2 ? ? A G 2 A C 15 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog6  hydrog ? ? A G 2 O6 ? ? ? 1_555 A C 15 N4 ? ? A G 2 A C 15 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog7  hydrog ? ? A G 3 N1 ? ? ? 1_555 A C 14 N3 ? ? A G 3 A C 14 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog8  hydrog ? ? A G 3 N2 ? ? ? 1_555 A C 14 O2 ? ? A G 3 A C 14 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog9  hydrog ? ? A G 3 O6 ? ? ? 1_555 A C 14 N4 ? ? A G 3 A C 14 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog10 hydrog ? ? A A 4 N1 ? ? ? 1_555 A U 13 N3 ? ? A A 4 A U 13 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog11 hydrog ? ? A A 4 N6 ? ? ? 1_555 A U 13 O4 ? ? A A 4 A U 13 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog12 hydrog ? ? A C 5 N3 ? ? ? 1_555 A G 12 N1 ? ? A C 5 A G 12 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog13 hydrog ? ? A C 5 N4 ? ? ? 1_555 A G 12 O6 ? ? A C 5 A G 12 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog14 hydrog ? ? A C 5 O2 ? ? ? 1_555 A G 12 N2 ? ? A C 5 A G 12 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog15 hydrog ? ? A C 6 N3 ? ? ? 1_555 A G 11 N1 ? ? A C 6 A G 11 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog16 hydrog ? ? A C 6 N4 ? ? ? 1_555 A G 11 O6 ? ? A C 6 A G 11 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog17 hydrog ? ? A C 6 O2 ? ? ? 1_555 A G 11 N2 ? ? A C 6 A G 11 1_555 ? ? ? ? ? ? WATSON-CRICK  ? ? 
hydrog18 hydrog ? ? A A 7 N3 ? ? ? 1_555 A A 10 N6 ? ? A A 7 A A 10 1_555 ? ? ? ? ? ? 'A-A MISPAIR' ? ? 
# 
_struct_conn_type.id          hydrog 
_struct_conn_type.criteria    ? 
_struct_conn_type.reference   ? 
# 
_database_PDB_matrix.entry_id          1ATV 
_database_PDB_matrix.origx[1][1]       1.000000 
_database_PDB_matrix.origx[1][2]       0.000000 
_database_PDB_matrix.origx[1][3]       0.000000 
_database_PDB_matrix.origx[2][1]       0.000000 
_database_PDB_matrix.origx[2][2]       1.000000 
_database_PDB_matrix.origx[2][3]       0.000000 
_database_PDB_matrix.origx[3][1]       0.000000 
_database_PDB_matrix.origx[3][2]       0.000000 
_database_PDB_matrix.origx[3][3]       1.000000 
_database_PDB_matrix.origx_vector[1]   0.00000 
_database_PDB_matrix.origx_vector[2]   0.00000 
_database_PDB_matrix.origx_vector[3]   0.00000 
# 
_atom_sites.entry_id                    1ATV 
_atom_sites.fract_transf_matrix[1][1]   1.000000 
_atom_sites.fract_transf_matrix[1][2]   0.000000 
_atom_sites.fract_transf_matrix[1][3]   0.000000 
_atom_sites.fract_transf_matrix[2][1]   0.000000 
_atom_sites.fract_transf_matrix[2][2]   1.000000 
_atom_sites.fract_transf_matrix[2][3]   0.000000 
_atom_sites.fract_transf_matrix[3][1]   0.000000 
_atom_sites.fract_transf_matrix[3][2]   0.000000 
_atom_sites.fract_transf_matrix[3][3]   1.000000 
_atom_sites.fract_transf_vector[1]      0.00000 
_atom_sites.fract_transf_vector[2]      0.00000 
_atom_sites.fract_transf_vector[3]      0.00000 `]


interface DetailsProps {
    details: any;
}

export const Details = (props: DetailsProps) => {

    return (
        <div className="main-block">
            <div className="litemol-block">
                <div className="title-block">3D interactive view</div>
                <LiteMolPlugin
                    url={props.details.url}
                    id={props.details.id}
                    format={props.details.format}
                    molecule_id={props.details.molecule_id}
                />
            </div>
            <div className="varna-block">
                <div className="title-block">2D view</div>
                <div className="varna-image" />
            </div>
            <div className="details-text">
                {globalDetailsExample[0]}
            </div>
        </div>
    )
}

export default Details;